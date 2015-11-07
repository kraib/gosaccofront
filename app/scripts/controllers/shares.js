'use strict';

/**
 * @ngdoc function
 * @name gosaccov1App.controller:SharesCtrl
 * @description
 * # SharesCtrl
 * Controller of the gosaccov1App
 */
angular.module('gosaccov1App')
  .controller('SharesCtrl', function ($scope,shares) {

    shares.getTotalShareValue().then(function(total){
     $scope.total_share_value=total;

   },function(error){
     //error

   });
    shares.getTransactions().then(function(transaction){
      $scope.trascationList=transaction.data;
    },function(error){
      //error
      console.log(angular.toJson(error));
    });
  });
