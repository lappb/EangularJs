'use strict';

/**
 * @ngdoc function
 * @name eangularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eangularJsApp
 */
angular.module('eangularJsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
