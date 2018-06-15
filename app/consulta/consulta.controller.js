angular.module('medOnline').controller('ConsultaCtrl', function($scope, $rootScope, $location, $http, escopoCompartilhadoService){

    var vm = $scope;

    vm.consultas = [];
    vm.consulta = {};

    function init(){
        if(escopoCompartilhadoService.get("medico")){
            vm.consulta.medico = escopoCompartilhadoService.get("medico");
            escopoCompartilhadoService.clear();
        } else if(escopoCompartilhadoService.get("consulta")) {
            vm.consulta = escopoCompartilhadoService.get("consulta");
            escopoCompartilhadoService.clear();
        } else {
            vm.voltar();
        }
    }

    vm.genero = function(genero){
        return genero == 'MASC' ? 'Homem' : 'Mulher';
    };

    vm.idade = function(dataNascimento){
        if(!dataNascimento){
            return '';
        }
        var idade = new Date(dataNascimento);
        return new Date().getFullYear() - idade.getFullYear();
    };

    vm.voltar = function(){
        if(vm.consulta.idConsulta){
            $location.path('usuario/consultas');
        } else {
            $location.path('/medicos');
        }
    };

    vm.showModal = function(){
        $('#modalConfirmacao').removeClass('hidden');
    };

    vm.fecharModal = function(){
        $('#modalConfirmacao').addClass('hidden');
        vm.assuntoModal = undefined;
    };

    vm.buscar = function(usuario){
        $http.get($rootScope.host+'/consulta/buscarPorUsuario/'+$rootScope.usuario.id, consulta).then(function(resp){
            vm.consultas = resp.data;
        });
    };

    vm.novaConsulta = function(){
        var consulta = {};
        consulta.dtConsulta = new Date();
        consulta.medico = vm.consulta.medico;
        consulta.paciente = $rootScope.usuario;
        consulta.assunto = vm.consulta.assunto;
        $http.post($rootScope.host+'/consulta/salvar', consulta).then(function(resp){
            $location.path('usuario/consultas');
        });
    };

    vm.confirmarModal = function(){
        vm.consulta.assunto = angular.copy(vm.assuntoModal);
        vm.fecharModal();
    };

    vm.irChat = function(){
        escopoCompartilhadoService.clear();
        escopoCompartilhadoService.set("consulta", vm.consulta);
        $location.path('/chat');
    }

    init();

});