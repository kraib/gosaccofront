'use strict';

/**
 * @ngdoc function
 * @name gosaccov1App.controller:LoanapplicationformCtrl
 * @description
 * # LoanapplicationformCtrl
 * Controller of the gosaccov1App
 */
angular.module('gosaccov1App')
  .controller('LoanapplicationformCtrl', function ($scope,loans) {
    $scope.form={};
    $scope.applyForLoan=function(applicationForm) {
      $scope.$broadcast('show-errors-check-validity');

      applicationForm.application_number = 122;

      if ($scope.loanForm.$valid) {
        // save the user

        loans.applyForLoan(applicationForm).then(function (data) {
            //reset form
            $scope.form = {};

          }, function (error) {


          }
        )
      };
    }




  });
