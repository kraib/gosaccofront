'use strict';

/**
 * @ngdoc function
 * @name gosaccov1App.controller:LoanapplicationsingleCtrl
 * @description
 * # LoanapplicationsingleCtrl
 * Controller of the gosaccov1App
 */
angular.module('gosaccov1App')
  .controller('LoanapplicationsingleCtrl', function ($routeParams,$scope,loans,savings,shares,Notification) {

    //get loan details
    loans.getSingleLoanApplication($routeParams.appId).then(function(data){
      $scope.loanApplicationForm=data[0];

    });

    //get loan gaurantors
    loans.getApplicationGuarantor($routeParams.appId).then(function(data){
      $scope.applicationGuarators=data;
    });
    loans.getApplicationSavingsSecurities($routeParams.appId).then(function(data){
      $scope.applicationSavingsSecurities=data;
    });

   loans.getApplicationSharesSecurities($routeParams.appId).then(function(data){
     $scope.applicationSharesSecurities=data;
    });
    loans.getApplicationArticlesSecurities($routeParams.appId).then(function(data){
      $scope.applicationArticlesSecurities=data;
    });
    //get savings
    savings.getCurrentBalance().then(function(data){
      $scope.userSavings=data.data;
    });
    //get shares
    shares.getShares().then(function(data){
      $scope.userShares=data.data;
    });

    $scope.addSavings=function(savings){
      if(validateSavingsInput(savings)){

        savings.loan_application=$routeParams.appId;

        loans.postApplicationSavingsSecurites(savings).then(function(data){

/// add saved items to list
          $scope.applicationSavingsSecurities.push({savings_amount:savings.savings_amount,savings_type:savings.savings_type});
       //clear form
          $scope.savingsSecurity={};

          Notification.success({message: "Security Was Added Successfully", title: 'Security Added'});

        }).catch(function(error){


          Notification.error({message: angular.toJson(error.data), title: 'Error'});
        })
      }
      else{
        Notification.error({message: "You Don't Have That Amount of Savings", title: 'Error'});
      }
    }
    function validateSavingsInput(form){
      //get total of share type submited

      var result= $scope.userSavings.filter(function (obj) {
        console.log(angular.toJson(obj));
        return obj.savings_type.id == form.savings_type;
      });

      if(result[0].amount >= form.savings_amount){

        return true;
      }
      return false;
    }
    $scope.addShares=function(savings){
      if(validateSharesInput(savings)){

        savings.loan_application=$routeParams.appId;

        loans.postApplicationSharesSecurites(savings).then(function(data){
          $scope.applicationSharesSecurities.push({number_of_shares:savings.number_of_shares,value:"_",share_type:savings.share_type});

          $scope.sharesSecurity={};

          Notification.success({message: "Security Was Added Successfully", title: 'Security Added'});

        }).catch(function(error){

          Notification.error({message: "An Error Occured", title: 'Error'});
        })
      }
      else{
        Notification.error({message: "You Don't Have Those Number of Shares", title: 'Error'});
      }
    }
    function validateSharesInput(form){
      //get total of share type submited
      var result= $scope.userShares.filter(function (obj) {
         return obj.share_type.id == form.share_type;
      });

      if(result[0].number_of_shares >= form.number_of_shares){
        console.log("true");
        return true;
      }

      return false;
    }


    $scope.addArticle = function(article){

      $scope.$broadcast('show-errors-check-validity');
      if ($scope.loanForm.$valid) {
        article.loan_application=$routeParams.appId;
        loans.postApplicationArticlesSecurites(article).then(function (data) {
          $scope.articleSecurity = {};
          $('#myModal').modal('hide');

          $scope. applicationArticlesSecurities.push({value: article.value, type: article.type});

          Notification.success({message: "Security Was Added Successfully", title: 'Security Added'});
        }).catch(function (error) {
          Notification.error({message: "An Error Occured", title: 'Error'});
        })
      }
    }

      });
