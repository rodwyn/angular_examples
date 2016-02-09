'use strict';

/**
 * @ngdoc function
 * @name hpAppApp.controller:DirectivaCtrl
 * @description
 * # DirectivaCtrl
 * Controller of the hpAppApp
 */
angular.module('hpAppApp')
  .controller('DirectivaCtrl', function ($scope, Players) {
    $scope.players = Players.data;
  })
  .factory('Players', function() {
    var service = {
      data : [
        {name: 'Lionel Messi',  age: 27, team: 'FC Barcelona', position:'Atacante', goals:447, image: '/players/player-001.jpg'},
        {name: 'Thomas Müller', age: 26, team: 'Bayern München', position:'Delantero', goals:157, image: '/players/player-004.JPG'},
        {name: 'Andrea Pirlo', age: 36, team: 'Juventus', position:'Centrocampista', goals:72, image: '/players/player-005.jpg'},
        {name: 'Gareth Bale', age: 26, team: 'Real Madrid', position:'Extremo', goals:109, image: '/players/player-003.jpg'},
        {name: 'Manuel Neuer', age: 29, team: 'Bayern München', position:'Portero', goals:0, image: '/players/player-002.JPG'}
      ]
    };
    return service;

  })
  .directive('rdPlayer',function() {
    return {
      restrict: 'E',
      templateUrl: 'views/player.html',
      scope: {
        playerData: '=info'
      }
    };
  })
;
