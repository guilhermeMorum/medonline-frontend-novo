angular.module('medOnline').controller('ChatCtrl', function($scope, $rootScope, $location, $http, escopoCompartilhadoService){

    var vm = $scope;

    vm.mensagens = [];

    vm.mensagem = {};

    vm.diagnostico = {
        receita: []
    };

    vm.exame = {};

    function init(){
        vm.consulta = escopoCompartilhadoService.get("consulta");
        if(vm.consulta){
            $http.get($rootScope.host+'/mensagem/buscaMensagensPorConsulta?idConsulta='+vm.consulta.idConsulta)
            .then(function(resp){
                vm.mensagens = resp.data;
            });
        }
        vm.mensagem.consulta = vm.consulta;
        vm.mensagem.fromPaciente = angular.isUndefined($rootScope.usuario.idMedico);
    }

    vm.enviarMensage = function(){
        vm.mensagem.dtMensagem = new Date();
        $http.post($rootScope.host+'/mensagem/salvar', vm.mensagem).then(function(resp){
            vm.mensagens = resp.data;
            vm.mensagem.texto = "";
        });
    };

    vm.emitirDiagnostico = function(){
        vm.diagnostico.idConsulta = vm.consulta.idConsulta;
        $http.post($rootScope.host+'/diagnostico/salvar', vm.diagnostico).then(function(){
            vm.fecharModal();
            vm.consulta.finalizada = true;
        });
    };

    vm.cancelar = function(){
        $http.get($rootScope.host+'/consulta/cancelar?idConsulta='+vm.consulta.idConsulta).then(function(){
            vm.consulta.finalizada = true;
        });
    };

    vm.addReceita = function(){
        var receita = {};
        receita.descricao = vm.descricaoReceita;
        receita.dtReceita = new Date();
        vm.diagnostico.receita.push(angular.copy(receita));
        vm.descricaoReceita = undefined;
    };

    vm.showModal = function(){
        $('#modalConfirmacao').removeClass('hidden');
    };

    vm.fecharModal = function(){
        $('#modalConfirmacao').addClass('hidden');
        vm.diagnostico = {
            receita: []
        };
    };

    vm.modalExames = function(){
        $('#modalExames').removeClass('hidden');
    };

    vm.fecharModalExames = function(){
        $('#modalExames').addClass('hidden');
    };

    vm.enviarExame = function(){
        vm.exame.idConsulta = vm.consulta.idConsulta;
        vm.exame.dtExame = new Date();
        $http.post($rootScope.host+'/exame/salvar', vm.exame).then(function(){
            vm.consulta.exame.push(angular.copy(vm.exame));
            vm.exame = {};
        });
        vm.fecharModal();
    };

    init();

});