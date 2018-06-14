angular.module('medOnline').controller('ChatCtrl', function($scope, $rootScope, $location, $http, escopoCompartilhadoService){

    var vm = $scope;

    vm.mensagens = [];

    vm.mensagem = {};

    vm.diagnostico = {
        receita: []
    };

    function init(){
        vm.consulta = escopoCompartilhadoService.get("consulta");
        if(vm.consulta){
            $http.get($rootScope.host+'/mensagem/buscaMensagensPorConsulta?idConsulta='+vm.consulta.idConsulta)
            .then(function(resp){
                vm.mensagens = resp.data;
            });
        }
        console.log(vm.consulta)
        vm.mensagem.consulta = vm.consulta;
        vm.mensagem.fromPaciente = angular.isUndefined($rootScope.usuario.idMedico);
    }

    vm.enviarMensage = function(){
        vm.mensagem.dtMensagem = new Date();
        $http.post($rootScope.host+'/mensagem/salvar', vm.mensagem).then(function(resp){
            vm.mensagens = resp.data;
            vm.mensagem.texto = "";
        });
    }

    vm.emitirDiagnostico = function(){
        vm.diagnostico.consulta = vm.consulta;
        $http.post($rootScope.host+'/diagnostico/salvar', vm.diagnostico).then(function(resp){
        });
    }

    vm.addReceita = function(){
        var receita = {};
        receita.descricao = vm.descricaoReceita;
        receita.dtReceita = new Date();
        vm.diagnostico.receita.push(angular.copy(receita));
        vm.descricaoReceita = undefined;
    }

    vm.showModal = function(){
        $('#modalConfirmacao').removeClass('hidden');
    };

    vm.fecharModal = function(){
        $('#modalConfirmacao').addClass('hidden');
        vm.diagnostico = {
            receita: []
        };
    };

    init();

});