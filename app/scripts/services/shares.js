'use strict';

/**
 * @ngdoc service
 * @name gosaccov1App.shares
 * @description
 * # shares
 * Factory in the gosaccov1App.
 */
angular.module('gosaccov1App')
  .factory('shares', function (WebServer,$http,$q,Authentication) {
    // Service logic
    // ...

    var userid=Authentication.exists();

    // Public API here
    return {
      getTransactions: function () {

        return $http.get(WebServer.url+'/members/'+userid+'/shares/transactions');
      },
      getShares: function () {
        return $http.get(WebServer.url+'/members/'+userid+'/shares');
      },

      getTotalShareValue: function() {
        var deferred = $q.defer();
        this.getShares().then(function(shareTypes){


          var total=0;
          angular.forEach(shareTypes.data, function(share){
            total=total+(share.share_type.share_price*share.number_of_shares);

          });
          deferred.resolve({ amount:total});


        },function(error){
          deferred.reject(error);
        });

        return deferred.promise;

      }
    };
  });
