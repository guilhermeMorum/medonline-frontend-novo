angular.module('medOnline').controller('MainCtrl', function($scope, $rootScope, $location){

    var vm = $scope;

    function init(){
        defineGlobals();
        if($rootScope.usuario){
            vm.usuario = $rootScope.usuario;
        } else {
            $location.path('/home');
        }
    }

    function defineGlobals(){
        $rootScope.host = "http://localhost:8080";
    }

    vm.logout = function(){
        vm.usuario = undefined;
        $rootScope.usuario = undefined;
        $location.path('/home');
    };

    init();

    $rootScope.$watch('usuario', function(value){
        $scope.usuario = value;
    }, true);

});