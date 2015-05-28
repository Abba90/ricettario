'use strict';

/**
 * @ngdoc overview
 * @name porApp
 * @description
 * # porApp
 *
 * Main module of the application.
 */
angular
  .module('porApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:ricetta', {
        templateUrl: 'views/ricetta.html',
        controller: 'RicettaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
