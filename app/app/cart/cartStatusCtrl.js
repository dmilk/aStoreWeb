'use strict';

angular.module('aStore.cartStatus', [])
        .config(config)
        .controller('cartStatusCtrl', cartStatusCtrl);

function cartStatusCtrl($scope, CartService) {
            // listener on the cart content
            CartService.addListener(function() {
                updateCartContentScope();
            });

            updateCartContentScope();

            // scope update:
            function updateCartContentScope() {
                if (CartService.size() === 0) {
                    $scope.size = 0;
                    $scope.content = 'EMPTY';
                } else {
                    $scope.size = CartService.size();
                    $scope.content = 'FULL';
                }
            }
        }

//angular.module('aStore.cartStatusController', ['ngResource']).
//        controller('cartStatusController', function ($scope, CartService) {
//            // listener on the cart content
//            CartService.addListener(function() {
//                updateCartContentScope();
//            });
//
//            updateCartContentScope();
//
//            // scope update:
//            function updateCartContentScope() {
//                if (CartService.size() === 0) {
//                    $scope.size = 0;
//                    $scope.content = 'EMPTY';
//                } else {
//                    $scope.size = CartService.size();
//                    $scope.content = 'FULL';
//                }
//            }
//        });
