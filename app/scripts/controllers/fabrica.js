'use strict';

/**
 * @ngdoc function
 * @name hpAppApp.controller:FabricaCtrl
 * @description
 * # FabricaCtrl
 * Controller of the hpAppApp
 */
angular.module('hpAppApp')
  .controller('FabricaCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }).factory('Fabrica', function () {
    var servicio = {
      objeto: {mensaje: 'Mensaje desde la fabrica.'},
      msjInicial: function() {
        servicio.objeto.mensaje = 'Mensaje desde la fabrica.';
      },
      msjNuevo: function(msj) {
        servicio.objeto.mensaje = msj;
      }
    };
    return servicio;
  })
  .controller('ControladorUno', function ($scope, Fabrica) {
    $scope.nuevo = function() {
      Fabrica.msjNuevo($scope.nuevoMensaje);
    };

    $scope.dato = Fabrica.objeto;
  })
  .controller('ControladorDos', function ($scope, Fabrica) {
    $scope.nuevo = function() {
      Fabrica.msjNuevo($scope.nuevoMensaje);
    };

    $scope.dato = Fabrica.objeto;
  })
  .controller('ControladorTres', function($scope, Fabrica) {
    $scope.resetear = function() {
      Fabrica.msjInicial();
    };
  });
