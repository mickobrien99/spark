'use strict';
angular.module('sparkApp.home', [])
.config(function($stateProvider){
  $stateProvider.state('app.home', {
    url: '/',
    views: {
      'layoutMainContent': {
        controller: 'HomeCtrl',
        templateUrl: 'scripts/modules/home/home.tpl.html'
      }
    }
  });
})

.controller('HomeCtrl', function($scope){
  $scope.example = "Home Sample Scope";
});
