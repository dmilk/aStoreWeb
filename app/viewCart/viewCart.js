'use strict';

angular.module('aStore.viewCart', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/viewCart', {
                    templateUrl: 'viewCart/viewCart.html',
                    controller: 'ViewCartCtrl'
                });
            }])

        .controller('ViewCartCtrl', function ($scope, $location, Cart) {
            $scope.Cart = Cart;

            updateScope();

            function updateScope() {
                $scope.cartContent = Cart.getTickets();
                $scope.total = Cart.getTotal();
                // уходим из корзины раз там пусто
                if (Cart.size() == 0) {
                    $location.path("#");
                }
            }

            $scope.remove = function (ticket) {
                Cart.remove(ticket);
                updateScope();
            };

            $scope.removeAll = function () {
                Cart.removeAll();
                updateScope();
                $location.path("#");
            };

        });