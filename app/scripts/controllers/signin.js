'use strict';

/**
 * @ngdoc function
 * @name gosaccov1App.controller:SigninCtrl
 * @description
 * # SigninCtrl
 * Controller of the gosaccov1App
 */
angular.module('gosaccov1App')
  .controller('SigninCtrl', function ($scope,Authentication,$location,Notification) {
    Authentication.logout();

  	$scope.user={};
  	$scope.login=function(user){


  		  	Authentication.login(user).then(function(data){
            Notification.success({message: 'Success Login <br>You have Opened the Chamber of <b>secrets</b><br>', title: 'Welcome '});
            $location.path('/');

  		    },function(error){
            Notification.error({message: error, title: 'Error '});

  		    });
  		}
  	});


