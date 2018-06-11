angular.module('medOnline').controller('ConsultaCtrl', function($scope, $rootScope, $location, escopoCompartilhadoService){

    var vm = $scope;

    function init(){
        if(escopoCompartilhadoService.get("medico")){
            vm.medico = escopoCompartilhadoService.get("medico");
        } else {
            vm.voltar();
        }
    }

    vm.genero = function(genero){
        return genero == 'MASC' ? 'Homem' : 'Mulher';
    };

    vm.idade = function(dataNascimento){
        var idade = dataNascimento.split('/');
        idade = new Date(idade[2], idade[1], idade[0]);
        return new Date().getFullYear() - idade.getFullYear();
    };

    vm.voltar = function(){
        $location.path('/medicos');
    };

    vm.showModal = function(){
        $('#modalConfirmacao').removeClass('hidden');
    };

    vm.fecharModal = function(){
        $('#modalConfirmacao').addClass('hidden');
        vm.assuntoModal = undefined;
    };

    vm.novaConsulta = function(){
        var consulta = {};
        consulta.dtConsulta = new Date();
        consulta.medico = vm.medico;
        consulta.paciente = $rootScope.usuario;
        console.log(consulta);
    };

    vm.confirmarModal = function(){
        vm.assunto = angular.copy(vm.assuntoModal);
        vm.fecharModal();
    };

    init();

});