'use strict';

/**
 * @ngdoc function
 * @name gosaccov1App.controller:SavingsCtrl
 * @description
 * # SavingsCtrl
 * Controller of the gosaccov1App
 */
angular.module('gosaccov1App')
  .controller('SavingsCtrl', function (savings,$scope) {

    savings.getSavings().then(function(data){
    	$scope.savingsList=data.data;


    },function(error){

     });

savings.getCurrentBalance().then(function(data){
    	$scope.savingStatus=data.data[0];



    },function(error){

     });

  });
