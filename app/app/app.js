'use strict';

var aStore = angular.module('aStore', [
    'ngRoute',
    'aStore.login',
    'aStore.signup',
    'aStore.route',
    'aStore.category',
    'aStore.ticket',
    'aStore.cart',
    'aStore.checkout',
    'aStore.interceptor',
    'aStore.mainCtrl',
    'aStore.cartStatus',
    'aStore.directives',
]).
        config(['$routeProvider', function ($routeProvider) {
                $routeProvider.otherwise({redirectTo: '/app/route'});
            }]).
        config(function ($httpProvider) {
            $httpProvider.interceptors.push('authHttpRequestInterceptor');
        });


