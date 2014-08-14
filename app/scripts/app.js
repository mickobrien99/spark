'use strict';
var sparkApp = angular.module('sparkApp', [
  'ionic',
  'ngCookies',
  'pascalprecht.translate',
  'sparkApp.home',
  'sparkApp.pagetwo'
]);


sparkApp.config(function($stateProvider, $locationProvider, $urlRouterProvider, $translateProvider){
  $stateProvider.state('app', {
    url: '',
    abstract: true,
    templateUrl: 'scripts/modules/layout.tpl.html'
  });
  //No states are matched, use this as the fallback
  //$locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  //Set Up Translation Provider
  $translateProvider
    .preferredLanguage('en')
    .useLocalStorage()
    .useStaticFilesLoader({ prefix: '/copy/', suffix: '.json' })
    .useSanitizeValueStrategy('escaped');
});

sparkApp.run(function($ionicPlatform){
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard){
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
  });
});

sparkApp.controller('SparkCtrl', function($scope){

});
