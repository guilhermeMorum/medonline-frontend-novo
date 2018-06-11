angular.module('medOnline').factory('escopoCompartilhadoService', [function(){

    var obj = {};

    function set(param, value){
        obj[param] = value;
    }

    function get(param){
        return obj[param];
    }

    function clear(){
        obj = {};
    }

    return {
        set: set,
        get: get,
        clear: clear
    }

}]);