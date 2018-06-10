angular.module('medOnline').controller('HomeCtrl', function($scope, $http, $location){

    var vm = $scope;

    vm.irCadastro = function(){
        $location.path('/cadastrar');
    };

    vm.login = function(){
        $http.get('http://localhost:8080/paciente/login/'+vm.usuario+'/'+vm.senha).then(function(data){
            console.log(data);
        });
    }

});