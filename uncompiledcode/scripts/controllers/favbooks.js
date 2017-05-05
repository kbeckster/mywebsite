'use strict';
/**
 * @ngdoc function
 * @name mysiteApp.controller:FavBooksCtrl
 * @description
 * # FavBooksCtrl
 * Controller of the mysiteApp
 */

angular.module('mysiteApp')
    .controller('FavBooksCtrl', function($scope, $http) {

      $http.get('https://www.googleapis.com/books/v1/users/100652730531308870109/bookshelves/0/volumes?key=AIzaSyCShvpu3o-5xpLHqfOOn6VBejqtx7yNRUw')
      .then(function(response) {
          $scope.books = response.data.items;
      });

  });
