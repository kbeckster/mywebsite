'use strict';
/**
 * @ngdoc overview
 * @name mysiteApp
 * @description
 * # mysiteApp
 *
 * Main module of the application.
 */
angular
  .module('mysiteApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: './views/main.html',
      })
      .when ('/about', {
        templateUrl: '/views/main.html',
      })
      .when('/latestproject', {
        templateUrl: '/views/latestProject.html',
        controller: 'LatestProjectCtrl',
        controllerAs: 'latestproject'
      })
      .when('/favbooks', {
        templateUrl: '/views/favBooks.html',
        controller: 'FavBooksCtrl',
        controllerAs: 'favbooks'
      })
      .otherwise({
        redirectTo: './views/main.html'
      });
  });
