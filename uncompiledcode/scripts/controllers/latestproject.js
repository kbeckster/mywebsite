'use strict';
/**
 * @ngdoc function
 * @name mysiteApp.controller:LatestProjectCtrl
 * @description
 * # LatestProjectCtrl
 * Controller of the mysiteApp
 */

angular.module('mysiteApp')
    .controller('LatestProjectCtrl', function($scope, $http) {
      $http.get('https://api.github.com/users/kbeckster/repos')
      .then(function(response) {
          $scope.repos = response.data;
      });
  });
