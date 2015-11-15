'use strict';

/**
 * @ngdoc service
 * @name gosaccov1App.savings
 * @description
 * # savings
 * Factory in the gosaccov1App.
 */
angular.module('gosaccov1App')
  .factory('loans', function ($q,WebServer,$http,Authentication) {
    // Service logic
    // ...
    var userid=Authentication.exists();
    function getValuesByID(id,object) {

     var result= object.filter(function (obj) {

         return obj.id == id;


      });

    return result;
    }

    function getValuesByloanApplicationId(id,object) {

      var result= object.filter(function (obj) {

        return obj.loan_application == id;


      });

      return result;
    }


    // Public API here
    return {
      getLoans: function () {
        return $http.get(WebServer.url+'/members/'+userid+'/loans');
      },
      getLoanBalance: function () {
        return $http.get(WebServer.url+'/members/'+userid+'/loans');
      },
      applyForLoan:function(loandetails){
        return $http.post(WebServer.url+'/members/'+userid+'/loans/applications',loandetails);

      },
      getLoanApplications:function(){
        return $http.get(WebServer.url+'/members/'+userid+'/loans/applications');
      },
      getSingleLoanApplication:function(id){
        var deferred =$q.defer();

        $http.get(WebServer.url+'/members/'+userid+'/loans/applications').then(function(data){

          deferred.resolve(getValuesByID(id,data.data));

        },function(error){
          deferred.reject("Error");
        })

        return deferred.promise;
      },
      postApplicationSavingsSecurites:function(savings){
        return $http.post(WebServer.url+'/members/'+userid+'/loans/securities/savings',savings);
      },
      getApplicationSavingsSecurities:function (applicationId){
        var deferred =$q.defer();

        $http.get(WebServer.url+'/members/'+userid+'/loans/securities/savings').then(function(data){

          deferred.resolve(getValuesByloanApplicationId(applicationId,data.data));

        },function(error){
          deferred.reject("Error");
        })

        return deferred.promise;

      },
      postApplicationSharesSecurites:function(savings){
      return $http.post(WebServer.url+'/members/'+userid+'/loans/securities/shares',savings);
      },
      getApplicationSharesSecurities:function (applicationId){
        var deferred =$q.defer();

        $http.get(WebServer.url+'/members/'+userid+'/loans/securities/shares').then(function(data){

          deferred.resolve(getValuesByloanApplicationId(applicationId,data.data));

        },function(error){
          deferred.reject("Error");
        })

        return deferred.promise;

      },
      getApplicationGuarantor:function (applicationId){
      var deferred =$q.defer();

      $http.get(WebServer.url+'/members/'+userid+'/loans/securities/guarantors').then(function(data){

        deferred.resolve(getValuesByloanApplicationId(applicationId,data.data));

      },function(error){
        deferred.reject("Error");
      })

      return deferred.promise;

      },
      postApplicationGuarantors:function(guarantor){
        return $http.post(WebServer.url+'/members/'+userid+'/loans/securities/guarantors',guarantor);
      },
      postApplicationArticlesSecurites:function(article){
        return $http.post(WebServer.url+'/members/'+userid+'/loans/securities/articles',article);
      },
      getApplicationArticlesSecurities:function (applicationId){
        var deferred =$q.defer();

        $http.get(WebServer.url+'/members/'+userid+'/loans/securities/articles').then(function(data){

          deferred.resolve(getValuesByloanApplicationId(applicationId,data.data));

        },function(error){
          deferred.reject("Error");
        })

        return deferred.promise;

      }
    };
  });
