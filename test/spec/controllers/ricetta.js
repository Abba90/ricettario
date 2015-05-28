'use strict';

describe('Controller: RicettaCtrl', function () {

  // load the controller's module
  beforeEach(module('porApp'));

  var RicettaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RicettaCtrl = $controller('RicettaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
