'use strict';
angular.module('sparkApp.pagetwo', [])
.config(function($stateProvider){
  $stateProvider
    .state('app.pagetwo', {
      url: '/pagetwo',
      views: {
        'layoutMainContent': {
          controller: 'PageTwoCtrl',
          templateUrl: 'scripts/modules/pagetwo/pagetwo.tpl.html'
        }
      }
    })
})

.controller('PageTwoCtrl', function($scope){
  $scope.example = "Page Two Sample Scope";
});
