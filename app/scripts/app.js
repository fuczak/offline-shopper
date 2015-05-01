// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

'use strict';
angular.module('offline-shopper', ['ionic', 'ngAnimate'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'templates/main.html'
    })
    .state('main.plan', {
      url: '/plan',
      views: {
        'main-plan': {
          templateUrl: 'templates/main-plan.html',
          controller: 'PlanController'
        }
      }
    })
    .state('main.recipelist', {
      url: '/recipelist',
      views: {
        'main-recipelist': {
          templateUrl: 'templates/main-recipelist.html',
          controller: 'RecipesController',
          resolve: {
            recipes: function(RecipeService) {
              return RecipeService.allRecipes;
            }
          }
        }
      }
    })
    .state('main.recipedetail', {
      url:'/recipe/:id',
      views: {
        'main-recipelist': {
          templateUrl: 'templates/main-recipedetail.html',
          controller: 'RecipeDetailController',
          resolve: {
            recipe: function(RecipeService, $stateParams) {
              return RecipeService.getRecipe($stateParams.id);
            }
          }
        }
      }
    })
    .state('main.fridge', {
      url: '/fridge',
      views: {
        'main-fridge': {
          templateUrl: 'templates/main-fridge.html',
          controller: 'FridgeController'
        }
      }
    });

  $urlRouterProvider.otherwise('/main/recipelist');
});
