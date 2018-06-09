'use strict';

// Declare app level module which depends on views, and components
angular.module('medOnline', [
  'ngRoute'
]);
angular.module('medOnline').config(function($routeProvider, $locationProvider){

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

        .otherwise({ redirectTo: '/home' });

    //$locationProvider.html5Mode(true);

});
