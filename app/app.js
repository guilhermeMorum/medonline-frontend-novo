'use strict';

// Declare app level module which depends on views, and components
angular.module('medOnline', [
  'ngRoute'
]);
angular.module('medOnline').config(function($routeProvider){

    $routeProvider

        .when('/home', {
            templateUrl : 'home/home.html',
            controller  : 'HomeCtrl'
        })

        .when('/consultas', {
            templateUrl : 'consulta/consultas.html',
            controller  : 'ConsultaCtrl'
        })

        .when('/perfil', {
            templateUrl : 'perfil/perfil.html',
            controller  : 'PerfilCtrl'
        })

        .when('/cadastrar', {
            templateUrl : 'perfil/perfil.html',
            controller  : 'CadastroCtrl'
        })

        .otherwise({ redirectTo: '/home' });

    //$locationProvider.html5Mode(true);

});
