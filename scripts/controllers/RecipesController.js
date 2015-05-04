'use strict';

angular.module('offline-shopper')
  .controller('RecipesController', function(RecipeService, recipes, $scope, $filter, $ionicPopover) {
    $scope.recipes = recipes.data;

    $ionicPopover.fromTemplateUrl('templates/partials/recipe-sort.html', {
      scope: $scope,
      animation: 'superScaleIn'
    }).then(function(popover) {
      $scope.popover = popover;
    });

    var orderBy = $filter('orderBy');
    $scope.order = function(predicate, reverse) {
      $scope.recipes = orderBy($scope.recipes, predicate, reverse);
      if(!!$scope.popover) { $scope.popover.hide(); }
    };
    $scope.order('name', false);

    $scope.toggleSearch = function() {
      if($scope.showSearch) {
        $scope.showSearch = false;
      } else {
        $scope.showSearch = true;
      }
    };

    $scope.clearSearch = function() {
      $scope.searchText = '';
    };
  });
