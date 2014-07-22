'use strict';

angular
  .module('angularIntroApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'demoDir.directive'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/Home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/newView', {
        templateUrl: 'views/example.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
angular.module('demoDir.directive',[]);