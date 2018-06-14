angular.module('medOnline').controller('CadastroCtrl', function($scope, $rootScope, $http, $location){

    var vm = $scope;

    vm.buttonName = "Cadastrar";

    vm.cadastrar = true;
    vm.editar = true;

    vm.especialidades = [];

    vm.usuario = {
        endereco: {},
        especialidade: {}
    };

    function init(){
        if($rootScope.usuario){
            vm.usuario = $rootScope.usuario;
            vm.cadastrar = false;
        } else {
            $location.path('usuario/cadastrar');
        }

        $http.get($rootScope.host+'/especialidade/buscaTodos').then(function(resp){
            vm.especialidades = resp.data;
        });
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
            vm.usuario.especialidade = undefined;
            $http.post($rootScope.host+'/paciente/salvar', vm.usuario).then(function(){
                $location.path('/home');
            });
        }
    };

    init();

});