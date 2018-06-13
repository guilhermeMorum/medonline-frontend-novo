angular.module('medOnline').controller('ConsultaListCtrl', function($scope, $rootScope, $location, $http, escopoCompartilhadoService){

    var vm = $scope;

    vm.consultas = [];

    function init(){
        vm.buscar();
    }

    vm.buscar = function(usuario){
        $http.get($rootScope.host+'/consulta/buscarPorUsuario/'+$rootScope.usuario.id, consulta).then(function(resp){
            vm.consultas = resp.data;
        });
    }

    init();

});