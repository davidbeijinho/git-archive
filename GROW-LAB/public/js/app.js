'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives','ui.bootstrap']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/index',
        controller: IndexCtrl
      }).
      when('/ambiente', {
        templateUrl: 'partials/ambiente',
        controller: AmbienteCtrl
      }).
      when('/ensaios', {
        templateUrl: 'partials/ensaios',
        controller: EnsaiosCtrl
      }).
       when('/rega', {
        templateUrl: 'partials/rega',
        controller: RegaCtrl
      }).
       when('/dashboard', {
        templateUrl: 'partials/dashboard',
        controller: DashboardCtrl
      }).
       when('/reports', {
        templateUrl: 'partials/reports',
        controller: ReportsCtrl
      }).
      when('/addPost', {
        templateUrl: 'partials/addPost',
        controller: AddPostCtrl
      }).
      when('/readPost/:id', {
        templateUrl: 'partials/readPost',
        controller: ReadPostCtrl
      }).
      when('/editPost/:id', {
        templateUrl: 'partials/editPost',
        controller: EditPostCtrl
      }).
      when('/deletePost/:id', {
        templateUrl: 'partials/deletePost',
        controller: DeletePostCtrl
      }).
      otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]);