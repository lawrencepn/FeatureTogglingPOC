'use strict';

/**
 * @ngdoc function
 * @name featureTogglingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the featureTogglingApp
 */
angular.module('featureTogglingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
