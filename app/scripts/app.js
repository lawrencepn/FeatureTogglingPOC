'use strict';

/**
 * @ngdoc overview
 * @name featureTogglingApp
 * @description
 * # featureTogglingApp
 *
 * Main module of the application.
 */
angular
  .module('featureTogglingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
