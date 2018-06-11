angular.module('medOnline').controller('HomeCtrl', function($scope, $rootScope, $http, $location){

    var vm = $scope;

    vm.irCadastro = function(){
        $location.path('usuario/cadastrar');
    };

    vm.login = function(){
        $http.get('http://localhost:8080/paciente/login/'+vm.usuario+'/'+vm.senha).then(function(result){
            $rootScope.usuario = result.data;
            $location.path('usuario/perfil');
        });
    }

});