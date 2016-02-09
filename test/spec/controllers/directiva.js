'use strict';

describe('Controller: DirectivaCtrl', function () {

  // load the controller's module
  beforeEach(module('hpAppApp'));

  var DirectivaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DirectivaCtrl = $controller('DirectivaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DirectivaCtrl.awesomeThings.length).toBe(3);
  });
});
