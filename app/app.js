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

        .when('/medicos', {
            templateUrl : 'medicos/medicos.html',
            controller  : 'MedicosCtrl'
        })

        .when('/consulta/detalhar', {
            templateUrl : 'consulta/detalhar.html',
            controller  : 'ConsultaCtrl'
        })

        .when('/usuario/perfil', {
            templateUrl : 'perfil/perfil.html',
            controller  : 'PerfilCtrl'
        })

        .when('/usuario/perfil/editar', {
            templateUrl : 'perfil/perfil.html',
            controller  : 'CadastroCtrl'
        })

        .when('/usuario/consultas', {
            templateUrl : 'consulta/listar.html',
            controller  : 'ConsultaListCtrl'
        })

        .when('/usuario/cadastrar', {
            templateUrl : 'perfil/perfil.html',
            controller  : 'CadastroCtrl'
        })

        .when('/chat', {
            templateUrl : 'chat/chat.html',
            controller  : 'ChatCtrl'
        })

        .otherwise({ redirectTo: '/home' });

    //$locationProvider.html5Mode(true);

});
