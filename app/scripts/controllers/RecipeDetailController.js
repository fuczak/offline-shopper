'use strict';
angular.module('offline-shopper')
  .controller('RecipeDetailController', function(recipe, $scope) {
    $scope.recipe = recipe;
  });
