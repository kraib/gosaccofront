'use strict';

/**
 * @ngdoc function
 * @name gosaccov1App.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the gosaccov1App
 */
angular.module('gosaccov1App')
  .controller('SidebarCtrl', function ($scope,Authentication,$location) {

  	Authentication.getUser().then(function(user){
  		$scope.user=user;

  	});

    console.log($location.path());
    $scope.getActiveClass=function(route){

      if($location.path()==route)
        return 'active';

      return '';
    }
  });
