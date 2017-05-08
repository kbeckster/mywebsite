'use strict';

/**
 * @ngdoc function
 * @name mysiteApp.filter:split
 * @description
 * # split
 * Filter for mysiteApp
 */


angular.module('mysiteApp')
    .filter('split', function() {
        return function(input, splitChar, splitIndex) {
            // do some bounds checking here to ensure it has that index
            return input.split(splitChar)[splitIndex];
        };
    });
