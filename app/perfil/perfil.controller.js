angular.module('medOnline').controller('PerfilCtrl', function($scope, $http, $rootScope, $location){

    var vm = $scope;

    function init(){

        if($rootScope.usuario){
            vm.usuario = $rootScope.usuario;
            vm.usuario.dtNascimento = new Date(vm.usuario.dtNascimento);
            vm.editar = false;
            if(vm.usuario.idMedico){
                vm.medico = true;
                $http.get($rootScope.host+'/medico/buscaMedicoPeloID?idMedico='+vm.usuario.idMedico).then(function(resp){
                    $http.get($rootScope.host+'/especialidade/buscaTodos').then(function(resp){
                        vm.especialidades = resp.data;
                    });
                    vm.usuario = resp.data;
                    vm.usuario.idEspecialidade = vm.usuario.especialidade.idEspecialidade;
                    vm.usuario.dtNascimento = new Date(vm.usuario.dtNascimento);
                    $rootScope.usuario = vm.usuario;
                });
            }
        } else {
            $location.path('/home');
        }

    }

    init();

});