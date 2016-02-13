'use strict';

/**
 * @ngdoc function
 * @name hpAppApp.controller:TareasCtrl
 * @description
 * # TareasCtrl
 * Controller of the hpAppApp
 */
angular.module('hpAppApp')
  .controller('TareasCtrl', function ($scope, $firebaseArray) {
    //Configurar conexión a base de datos.
    var refTareas = new Firebase('https://listatareasrod.firebaseio.com/tareas');

    $scope.tareas = $firebaseArray(refTareas);

    $scope.restantes = function() {
      //return $scope.tareas.$getIndex().length;
      return 1;
    };
    $scope.agregarTarea =  function() {
      $scope.tareas.$add({texto: $scope.textoNuevaTarea, hecho:false});
      $scope.textoNuevaTarea = '';
    };

  });
