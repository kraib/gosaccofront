'use strict';

/**
 * @ngdoc service
 * @name receiptApp.Application
 * @description
 * # Application
 * Service in the receiptApp.
 */
angular.module('gosaccov1App')
  .service('Application', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var ready = false, registeredListeners= [];

    var callListeners =function (){
        for (var i = registeredListeners.length - 1; i >= 0; i--) {
            registeredListeners[i]();
        };
    }

    return {
        makeUnReady: function(){
            ready = false;



        },
        isReady: function()
        {

            return ready;
        },
        makeReady: function(){
            ready = true;

            callListeners();

        },
        registerListener: function (callback)
        {
            if(ready) callback();
            else registeredListeners.push(callback);

        }
    }
  });
