angular.module('medOnline').controller('MedicosCtrl', function($scope, $rootScope, $location, $http, escopoCompartilhadoService){

    var vm = $scope;
    vm.especialidades = [];
    vm.medicos = [];

    function init(){
        $http.get($rootScope.host+'/especialidade/buscaTodos').then(function(resp){
            vm.especialidades = resp.data;
        });
        $http.get($rootScope.host+'/medico/buscaTodos').then(function(resp){
            vm.medicos = resp.data;
        });
    }

    vm.especialidadeFilter = function(medico){
        return !vm.especialidade || medico.especialidade.especialidade == vm.especialidade;
    };

    vm.detalhar = function(medico){
        escopoCompartilhadoService.set("medico", medico);
        $location.path("/consulta/detalhar");
    };

    init();

});