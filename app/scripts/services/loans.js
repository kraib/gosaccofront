'use strict';

/**
 * @ngdoc service
 * @name gosaccov1App.savings
 * @description
 * # savings
 * Factory in the gosaccov1App.
 */
angular.module('gosaccov1App')
  .factory('loans', function (WebServer,$http,Authentication) {
    // Service logic
    // ...
    var userid=Authentication.exists();



    // Public API here
    return {
      getLoans: function () {
        return $http.get(WebServer.url+'/members/'+userid+'/loans');
      },
      getLoanBalance: function () {
        return $http.get(WebServer.url+'/members/'+userid+'/loans');
      }
    };
  });
