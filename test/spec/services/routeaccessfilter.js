'use strict';

describe('Service: RouteAccessFilter', function () {

  // load the service's module
  beforeEach(module('gosaccov1App'));

  // instantiate service
  var RouteAccessFilter;
  beforeEach(inject(function (_RouteAccessFilter_) {
    RouteAccessFilter = _RouteAccessFilter_;
  }));

  it('should do something', function () {
    expect(!!RouteAccessFilter).toBe(true);
  });

});
