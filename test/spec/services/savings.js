'use strict';

describe('Service: savings', function () {

  // load the service's module
  beforeEach(module('gosaccov1App'));

  // instantiate service
  var savings;
  beforeEach(inject(function (_savings_) {
    savings = _savings_;
  }));

  it('should do something', function () {
    expect(!!savings).toBe(true);
  });

});
