angular.module('medOnline').controller('HomeCtrl', function($scope, $rootScope, $http, $location){

    var vm = $scope;

    function init(){
        if($rootScope.usuario){
            $location.path('usuario/perfil');            
        }
    }

    vm.irCadastro = function(){
        $location.path('usuario/cadastrar');
    };

    vm.login = function(){
        $http.get($rootScope.host+'/paciente/login/'+vm.usuario+'/'+vm.senha).then(function(result){
            $rootScope.usuario = result.data;
            $location.path('usuario/perfil');
        });
    }

    init();

});