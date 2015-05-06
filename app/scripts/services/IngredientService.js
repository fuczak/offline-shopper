'use strict';
angular.module('offline-shopper')
  .service('IngredientService', function($http, $localstorage) {

    var ingredients = $http.get('scripts/database/ingredients.json')
      .success(function(data) {
        return data;
      })
      .error(function(error) {
        return error;
      });

    var fridge = $localstorage.getObject('of-sh-fridge');

    var o = {
      allIngredients: ingredients,
      userIngredients: fridge,
      setFridge: function(data) {
        $localstorage.setObject('of-sh-fridge', data);
      }
    };

    return o;

  });
