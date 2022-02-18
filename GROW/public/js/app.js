'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['myApp.filters', 'myApp.directives'])
.
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'partials/index',
    controller: AppCtrl
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
  when('/login', {
    templateUrl: 'partials/login',
    controller: LoginCtrl
  }).
  when('/logout', {
    templateUrl: 'partials/login',
    controller: LogoutCtrl
  }).
  when('/perfil', {
    templateUrl: 'partials/perfil',
    controller: PerfilCtrl
  }).
  when('/estufas', {
    templateUrl: 'partials/estufas',
    controller: EstufasCtrl
  }).
  when('/reports', {
    templateUrl: 'partials/reports',
    controller: ReportsCtrl
      });//.
      // otherwise({
      //   redirectTo: '/'
      // });
$locationProvider.html5Mode(true);
}]);
