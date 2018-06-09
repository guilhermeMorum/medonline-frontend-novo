angular.module('medOnline').controller('CadastroCtrl', function($scope, $http, $location){

    var vm = $scope;

    vm.buttonName = "Cadastrar";

    vm.cadastrar = true;

    vm.usuario = {
        endereco: {}
    };

    vm.error = {};

    vm.gravar = function(){
        vm.error = {};
        if(vm.usuario.senha != vm.confirmacaoSenha){
            vm.error.senha = "As senhas devem ser iguais.";
            return;
        }
        $http.post('http://localhost:8080/paciente/salvar', vm.usuario).then(function(){
            $location.path('/home');
        });
    }

});