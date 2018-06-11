angular.module('medOnline').controller('CadastroCtrl', function($scope, $rootScope, $http, $location){

    var vm = $scope;

    vm.buttonName = "Cadastrar";

    vm.cadastrar = true;
    vm.editar = true;

    vm.usuario = {
        endereco: {}
    };

    function init(){
        if($rootScope.usuario){
            vm.usuario = $rootScope.usuario;
            vm.cadastrar = false;
        } else {
            $location.path('usuario/cadastrar');
        }
    }

    vm.error = {};

    vm.gravar = function(){
        vm.error = {};
        if(vm.usuario.senha != vm.confirmacaoSenha){
            vm.error.senha = "As senhas devem ser iguais.";
            return;
        }
        if(vm.medico){
            $http.post($rootScope.host+'/medico/salvar', vm.usuario).then(function(){
                $location.path('/home');
            });
        } else {
            vm.usuario.crm = undefined;
        }
        $http.post($rootScope.host+'/paciente/salvar', vm.usuario).then(function(){
            $location.path('/home');
        });
    };

    init();

});