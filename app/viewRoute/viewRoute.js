'use strict';

angular.module('aStore.viewRoute', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/viewRoute', {
                    templateUrl: 'viewRoute/viewRoute.html',
                    controller: 'ViewRouteCtrl'
                });
            }])

        .controller('ViewRouteCtrl', function ($scope, Route, Cart, Test) {
            $scope.allRoutes = Route.findAll();
            $scope.Cart = Cart;

            $scope.clickRoute = function(route) {
                $scope.Cart.routeId = route.id;
            }
            
            $scope.clickTest = function() {
                $scope.test = Test.getHeader();
            }
        });