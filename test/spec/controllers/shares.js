'use strict';

describe('Controller: SharesCtrl', function () {

  // load the controller's module
  beforeEach(module('gosaccov1App'));

  var SharesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SharesCtrl = $controller('SharesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SharesCtrl.awesomeThings.length).toBe(3);
  });
});
