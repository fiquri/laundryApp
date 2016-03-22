// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform, $rootScope, $state, $stateParams) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
  $rootScope.$state = $state;
  $rootScope.$stateParams  = $stateParams ;
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'app/templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'app/templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'app/templates/browse.html'
        }
      }
    })
    .state('app.outlet', {
      url: '/outlet',
      views: {
        'menuContent': {
          templateUrl: 'app/templates/outlet.html',
          controller:'MapCtrl'
        }
      }
    })
    .state('app.outletInfo', {
      url: '/outlet-info/:id',
      views: {
        'menuContent': {
          templateUrl: 'app/templates/outlet-info.html'        }
      }
    })
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'app/templates/home.html'
      }
    }
  })
  .state('app.kiloan', {
    url: '/kiloan',
    views: {
      'menuContent': {
        templateUrl: 'app/components/kiloan/kiloan.html',
        controller: "kiloanController"
      }
    },

    data:{
      'add' : true
    }
  })
  .state('index', {
    url: '/index',
    views: {
      'single': {
        templateUrl: 'app/templates/index.html'      }
    }
  })
  .state('signIn', {
    url: '/sign-in',
    views: {
      'single': {
        templateUrl: 'app/templates/sign-in.html'      }
    }
  })
  .state('signUp', {
    url: '/sign-up',
    views: {
      'single': {
        templateUrl: 'app/templates/sign-up.html'      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/index');
});
