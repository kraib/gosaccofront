'use strict';

describe('Service: WebServer', function () {

  // load the service's module
  beforeEach(module('gosaccov1App'));

  // instantiate service
  var WebServer;
  beforeEach(inject(function (_WebServer_) {
    WebServer = _WebServer_;
  }));

  it('should do something', function () {
    expect(!!WebServer).toBe(true);
  });

});
