'use strict';

/**
 * @ngdoc service
 * @name gosaccov1App.Authentication
 * @description
 * # Authentication
 * Service in the gosaccov1App.
 */
angular.module('gosaccov1App')
  .service('Authentication', function ($q,$http,$timeout,WebServer,store,$rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function
     var authenticatedUser;
     var memberid;
     var self = this;
    return {
    	requestUser: function()
    	{
    	//get User details

            return $http.get(WebServer.url+'/members/'+memberid+'/');

        },


    	getUser: function()
    	{
            var deferred = $q.defer();
            if(store.get('member')){
                deferred.resolve(store.get('member'));
            }
            else{
                this.requestUser().then(function(member){
                   authenticatedUser= member.data;
                   store.set('member',member.data);
                   deferred.resolve(member.data);

                },function(error){
                    deferred.reject('No User Found');
                });

            }

    		return deferred.promise;
    	},
    	exists: function()
    	{


    		return store.get('memberid');
    	},
    	login: function(credentials)
    	{
            var deferred = $q.defer();

    		$http.post(WebServer.url+'/auth/token-auth/',credentials).success(function(token){



    			if(token != null){
    				store.set('jwt',token.token);
                    memberid =token.member;
                    store.set('memberid',token.member);
                    $rootScope.$broadcast('loggedIn');
            deferred.resolve(memberid);
    			}

    			else{
    				deferred.reject('Given wrong Credentials');
    			}

    		}).error(function(error)
    		{
    			deferred.reject('Given wrong Credentials');


    		});
            return deferred.promise;
    	},
    	logout: function(){
            store.remove('member');
            store.remove('jwt');

    	}
    };
  });
