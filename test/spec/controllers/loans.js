'use strict';

describe('Controller: LoansCtrl', function () {

  // load the controller's module
  beforeEach(module('gosaccov1App'));

  var LoansCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoansCtrl = $controller('LoansCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LoansCtrl.awesomeThings.length).toBe(3);
  });
});
