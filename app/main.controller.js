angular.module('medOnline').controller('MainCtrl', function($scope, $rootScope, $location){

    var vm = $scope;

    function init(){
        defineGlobals();
        if($rootScope.usuario){
            vm.usuario = $rootScope.usuario;
        }
    }

    function defineGlobals(){
        $rootScope.host = "http://localhost:8080";
    }

    init();

});