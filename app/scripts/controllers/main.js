'use strict';

/**
 * @ngdoc function
 * @name gosaccov1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gosaccov1App
 */
angular.module('gosaccov1App')
  .controller('MainCtrl', function ($scope,shares,savings) {
    shares.getTotalShareValue().then(function(total){
      $scope.total_share_value=total;

    },function(error){
      //error

    });
    savings.getCurrentBalance().then(function(data){
      $scope.savingStatus=data.data[0];



    },function(error){

    });

    $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.series = ['Series A', 'Series B'];

    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
  });
