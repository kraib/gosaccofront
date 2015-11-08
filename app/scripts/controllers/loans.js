'use strict';

/**
 * @ngdoc function
 * @name gosaccov1App.controller:LoansCtrl
 * @description
 * # LoansCtrl
 * Controller of the gosaccov1App
 */
angular.module('gosaccov1App')
  .controller('LoansCtrl', function ($scope, loans, ngDialog) {
    loans.getLoans().then(function(data){
        $scope.loansList=data.data;


    },function(error){

     });

   loans.getLoanBalance().then(function(data){
        $scope.loanStatus=data.data[0];
    },function(error){

     });

   $scope.applyForLoan = function(){
    ngDialog.open({template:'views/partials/loansDialog.html'});
   }
  });
