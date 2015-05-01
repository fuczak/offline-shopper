'use strict';
angular.module('offline-shopper')
  .service('IngredientService', function($http) {

    var ingredients = $http.get('scripts/database/ingredients.json')
      .success(function(data) {
        return data;
      })
      .error(function(error) {
        return error;
      });

    var o = {
      allIngredients: ingredients,
      getIngredient: function(id) {
        return o.allIngredients.then(function(data) {
          return data.data[id];
        }, function(error) {
          return error;
        });
      }
    };

    return o;

  });
