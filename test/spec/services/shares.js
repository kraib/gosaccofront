'use strict';

describe('Service: shares', function () {

  // load the service's module
  beforeEach(module('gosaccov1App'));

  // instantiate service
  var shares;
  beforeEach(inject(function (_shares_) {
    shares = _shares_;
  }));

  it('should do something', function () {
    expect(!!shares).toBe(true);
  });

});
