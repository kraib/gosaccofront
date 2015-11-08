'use strict';

/**
 * @ngdoc overview
 * @name gosaccov1App
 * @description
 * # gosaccov1App
 *
 * Main module of the application.
 */
angular
  .module('gosaccov1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-jwt',
    'angular-storage',
    'angular-loading-bar',
    'chart.js',
    'ui-notification',
    'ngDialog',
    'angularUtils.directives.dirPagination'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        access: { requiresLogin: true }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        access: { requiresLogin: false }
      })
      .when('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'SigninCtrl',
        controllerAs: 'signin',
        access: { requiresLogin: false }
      })
      .when('/savings', {
        templateUrl: 'views/savings.html',
        controller: 'SavingsCtrl',
        controllerAs: 'savings',
        access: { requiresLogin: true }
      })
      .when('/loading', {
        templateUrl: 'views/loading.html',
        controller: 'LoadingCtrl',
        controllerAs: 'loading',
        access: { requiresLogin: false }
      })
      .when('/shares', {
        templateUrl: 'views/shares.html',
        controller: 'SharesCtrl',
        controllerAs: 'shares',
        access: { requiresLogin: true }
      })
      .when('/loans', {
        templateUrl: 'views/loans.html',
        controller: 'LoansCtrl',
        controllerAs: 'loans',
        access: { requiresLogin: true }
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl',
        controllerAs: 'settings',
        access: { requiresLogin: true }
      })
      .when('/notifications', {
        templateUrl: 'views/notifications.html',
        controller: 'NotificationsCtrl',
        controllerAs: 'notifications',
        access: { requiresLogin: true }
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function Config($httpProvider, jwtInterceptorProvider) {

    jwtInterceptorProvider.tokenGetter = function(store) {
      return store.get('jwt');
    }
    jwtInterceptorProvider.authPrefix = 'JWT ';

    $httpProvider.interceptors.push('jwtInterceptor');
    })
  .run(function(RouteAccessFilter,$rootScope,$location,Application,Authentication){
     $rootScope.$on('$routeChangeStart', function(scope, next ,current){
      //check if hass access

       if(!RouteAccessFilter.checkAccess(next.access))
      {

        $location.path('signin');
      }




     });

     $rootScope.$on('loggedIn',function(){
      Authentication.getUser().then(function(user){
        console.log(angular.toJson(user));
        Application.makeReady();

      },function(){
        $location.path('signin');
      }
      );
     })


  });
