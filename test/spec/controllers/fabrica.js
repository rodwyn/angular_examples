'use strict';

describe('Controller: FabricaCtrl', function () {

  // load the controller's module
  beforeEach(module('hpAppApp'));

  var FabricaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FabricaCtrl = $controller('FabricaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FabricaCtrl.awesomeThings.length).toBe(3);
  });
});
