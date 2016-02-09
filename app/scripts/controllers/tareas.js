'use strict';

/**
 * @ngdoc function
 * @name hpAppApp.controller:TareasCtrl
 * @description
 * # TareasCtrl
 * Controller of the hpAppApp
 */
angular.module('hpAppApp')
  .controller('TareasCtrl', function ($scope, $firebase) {
    //Configurar conexión a base de datos.
    var refTareas = new Firebase('https://listatareasrod.firebaseio.com/tareas');

    $scope.tareas = $firebase(refTareas);

    $scope.restantes = function() {
      return $scope.tareas.$getIndex().length;
    };
  });
