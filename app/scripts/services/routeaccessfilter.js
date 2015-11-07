'use strict';

/**
 * @ngdoc service
 * @name gosaccov1App.RouteAccessFilter
 * @description
 * # RouteAccessFilter
 * Service in the gosaccov1App.
 */ 
angular.module('gosaccov1App')
  .service('RouteAccessFilter', function (store, jwtHelper) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      checkAccess: function (access) {
      	
        
        if(access.requiresLogin==true){
        	if (store.get('jwt') && !jwtHelper.isTokenExpired(store.get('jwt'))) 
        		return true
        }
        else if(access.requiresLogin==false){
        	
        	return true	
        }
          
        
        return false;
      }
    };
  });
