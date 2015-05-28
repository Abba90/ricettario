'use strict';

/**
 * @ngdoc function
 * @name porApp.controller:RicettaCtrl
 * @description
 * # RicettaCtrl
 * Controller of the porApp
 */
angular.module('porApp')
  .controller('RicettaCtrl', function ($scope,$routeParams,myFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.ricetta=myFactory.getRicetta($routeParams.ricetta);
    $scope.getQuantita= function(ingrediente){
      if(ingrediente.quantita==0)
        return 'qb'
      else
        return ingrediente.quantita+'g'
    }

  });
