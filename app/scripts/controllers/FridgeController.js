'use strict';
angular.module('offline-shopper')
  .controller('FridgeController', function(IngredientService, ingredients, $ionicModal, $scope) {
    //$scope.ingredients = ingredients.data;
    $scope.userIngredients = IngredientService.userIngredients;
    $scope.ingredients = $scope.userIngredients.length > 0 ? $scope.userIngredients : ingredients.data;

    $ionicModal.fromTemplateUrl('templates/partials/add-ingredient.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });

    $scope.updateFridge = function(ingredients) {
      var output = [];
      ingredients.forEach(function(e) {
        if(e.isChecked) {
          output.push(e);
        }
      });
      IngredientService.setFridge(ingredients);
      $scope.userIngredients = output;
      $scope.closeModal();
    };

    $scope.removeIngredient = function(index) {
      $scope.userIngredients[index].isChecked = false;
      IngredientService.setFridge($scope.userIngredients);
    };

  });
