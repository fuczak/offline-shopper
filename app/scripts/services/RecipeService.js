'use strict';
angular.module('offline-shopper')
  .service('RecipeService', function($http) {

    var recipes = $http.get('scripts/database/recipes.json')
      .success(function(data) {
        return data;
      })
      .error(function(error) {
        return error;
      });

    var o = {
      allRecipes: recipes,
      getRecipe: function(id) {
        return o.allRecipes.then(function(data) {
          return data.data[id];
        }, function(error) {
          return error;
        });
      }
    };

    return o;

  });
