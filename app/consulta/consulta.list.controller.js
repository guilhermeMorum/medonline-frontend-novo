angular.module('medOnline').controller('ConsultaListCtrl', function($scope, $rootScope, $location, $http, escopoCompartilhadoService){

    var vm = $scope;

    vm.consultas = [];

    function init(){
        vm.buscar();
    }

    vm.buscar = function(usuario){
        if($rootScope.usuario.idMedico){
            $http.get($rootScope.host+'/consulta/buscaConsultaPorMedico?idMedico='+$rootScope.usuario.idMedico).then(function(resp){
                vm.consultas = resp.data;
            });
        } else {
            $http.get($rootScope.host+'/consulta/buscaConsultaPorPaciente?idPaciente='+$rootScope.usuario.idPaciente).then(function(resp){
                vm.consultas = resp.data;
            });
        }
    }

    vm.detalhar = function(consulta){
        escopoCompartilhadoService.set("consulta", consulta);
        if($rootScope.usuario.idMedico){
            $location.path('/chat');
        } else {
            $location.path('/consulta/detalhar');
        }
    }

    init();

});