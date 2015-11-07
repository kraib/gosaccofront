'use strict';

/**
 * @ngdoc service
 * @name gosaccov1App.savings
 * @description
 * # savings
 * Factory in the gosaccov1App.
 */
angular.module('gosaccov1App')
  .factory('savings', function (WebServer,$http,Authentication) {
    // Service logic
    // ...
    var userid=Authentication.exists();
    


    // Public API here
    return {
      getSavings: function () {
        return $http.get(WebServer.url+'/members/'+userid+'/savings/transactions');
      },
      getCurrentBalance: function () {
        return $http.get(WebServer.url+'/members/'+userid+'/savings');
      }
    };
  });