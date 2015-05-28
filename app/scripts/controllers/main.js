'use strict';

/**
 * @ngdoc function
 * @name porApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the porApp
 */
angular.module('porApp')
  .controller('MainCtrl', function ($scope,myFactory,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.dispensa=[];

    myFactory.getIngredienti().then(function(ingredienti){
      $scope.ingredienti=ingredienti;
      _.each($scope.ingredienti,function(){$scope.dispensa.push(true)});
    });

/*
    $scope.ingredienti=myFactory.getIngredienti();
      _.each($scope.ingredienti,function(){
        $scope.dispensa.push(true);
      });
*/
    $scope.flagIngredienti=true;

    myFactory.getRicette().then(function(ricette){$scope.ricette=ricette});
  //  $scope.ricette=myFactory.getRicette();

    $scope.goToRicetta= function(ricetta){
      $location.path("/" + ricetta );
    };

    $scope.allIngredienti= function(){
      $scope.flagIngredienti=!$scope.flagIngredienti;
      _.each($scope.dispensa,function(a,index){$scope.dispensa[index]=$scope.flagIngredienti})
      $scope.trovaRicette();
    };

    $scope.trovaRicette=function(){
      var dis=[];
      _.each($scope.dispensa, function(ingrediente,index){
        if (ingrediente)
          dis.push( $scope.ingredienti[index]);
      });

      $scope.ricette=myFactory.getPossibiliRicette(dis);
    };

  });
