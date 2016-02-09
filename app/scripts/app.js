'use strict';

/**
 * @ngdoc overview
 * @name hpAppApp
 * @description
 * # hpAppApp
 *
 * Main module of the application.
 */
angular
  .module('hpAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/tareas',{
        templateUrl:'views/tareas.html',
        controller: 'TareasCtrl',
        controllerAs:'tareas'
      })
      .when('/directiva',{
        templateUrl:'views/directiva.html',
        controller: 'DirectivaCtrl',
        controllerAs:'directiva'
      })
      .when('/fabrica',{
        templateUrl:'views/fabrica.html',
        controller: 'FabricaCtrl',
        controllerAs:'fabrica'
      })
      .when('/form',{
        templateUrl:'views/formulario.html',
        controller:'FormularioCtrl',
        controllerAs:'form'
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

;
