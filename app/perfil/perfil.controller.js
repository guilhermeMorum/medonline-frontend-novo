angular.module('medOnline').controller('PerfilCtrl', function($scope, $rootScope, $location){

    var vm = $scope;

    function init(){

        if($rootScope.usuario){
            vm.usuario = $rootScope.usuario;
            vm.editar = false;
        } else {
            $location.path('/home');
        }

    }

    init();

});