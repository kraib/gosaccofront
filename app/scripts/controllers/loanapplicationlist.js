'use strict';

/**
 * @ngdoc function
 * @name gosaccov1App.controller:LoanapplicationlistCtrl
 * @description
 * # LoanapplicationlistCtrl
 * Controller of the gosaccov1App
 */
angular.module('gosaccov1App')
  .controller('LoanapplicationlistCtrl', function ($scope,loans) {

    loans.getLoanApplications().then(function(response){
     $scope.loanApplications=response.data;

   }).catch(function(error){
     console.log('error');
   })
  });
