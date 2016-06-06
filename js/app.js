// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.factory', 'ionic-material', 'ionMdInput'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.categories', {
        url: '/categories',
        views: {
            'menuContent': {
                templateUrl: 'templates/categories.html',
                controller: 'CategoriesCtrl'
            }
        }
    })

    .state('app.list', {
        url : "/:id_Tipo/:nombre",
        views : {
           'menuContent' : {
              templateUrl : "templates/list.html",
              controller : 'ListCtrl'
          }
      }
  })

    .state('app.item', {
        url : "/:id_Ruta/:nombre",
        views : {
           'menuContent' : {
              templateUrl : "templates/item.html",
              controller : 'ItemCtrl'
          }
      }
  })

    .state('app.panel', {
        url : "/panel",
        views : {
           'menuContent' : {
              templateUrl : "templates/panel.html",
              controller : 'panelCtrl'
          }
      }
  })

    .state('app.favoritas', {
        url : "/favoritas",
        views : {
           'menuContent' : {
              templateUrl : "templates/favoritas.html",
              controller : 'panelCtrl'
          }
      }
  })

    .state('app.realizadas', {
        url : "/realizadas",
        views : {
           'menuContent' : {
              templateUrl : "templates/realizadas.html",
              controller : 'panelCtrl'
          }
      }
  })

        .state('app.pendientes', {
        url : "/pendientes",
        views : {
           'menuContent' : {
              templateUrl : "templates/pendientes.html",
              controller : 'panelCtrl'
          }
      }
  })




    .state('app.activity', {
        url: '/activity',
        views: {
            'menuContent': {
                templateUrl: 'templates/activity.html',
                controller: 'ActivityCtrl'
            },
            'fabContent': {
                template: '<button id="fab-activity" class="button button-fab button-fab-top-right expanded button-energized-900 flap"><i class="icon ion-paper-airplane"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 200);
                }
            }
        }
    })


    .state('app.gallery', {
        url: '/gallery',
        views: {
            'menuContent': {
                templateUrl: 'templates/gallery.html',
                controller: 'GalleryCtrl'
            },
            'fabContent': {
                template: '<button id="fab-gallery" class="button button-fab button-fab-top-right expanded button-energized-900 drop"><i class="icon ion-heart"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-gallery').classList.toggle('on');
                    }, 600);
                }
            }
        }
    })

    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});
