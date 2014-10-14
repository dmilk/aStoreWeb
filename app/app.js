'use strict';

var aStore = angular.module('aStore', [
  'ngRoute',
  'aStore.viewLogin',
  'aStore.viewRoute',
  'aStore.viewCategory',
  'aStore.viewTicket',
  'aStore.viewCart',
  'aStore.viewCheckout',
  'aStore.services',
  'aStore.langController',
  'aStore.cartStatusController'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/viewRoute'});
}]);


