'use strict';
angular.module('offline-shopper')
  .controller('FridgeController', function(IngredientService, ingredients, $ionicModal, $scope) {
    $scope.data = {
      showDelete: false
    };
    $scope.ingredients = ingredients.data;

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

    $scope.addIngredient = function(ingredient) {
      IngredientService.addIngredient(ingredient);
    };
  });
