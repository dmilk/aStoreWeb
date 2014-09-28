angular.module('aStore.cartStatusController', ['ngResource']).
        controller('cartStatusController', function ($scope, Cart) {
            // listener on the cart content
            Cart.addListener(function () {
                updateCartContentScope();
            });

            updateCartContentScope();

            // scope update:
            function updateCartContentScope() {
                if (Cart.size() === 0) {
                    $scope.size = 0;
                    $scope.content = 'EMPTY';
                } else {
                    $scope.size = Cart.size();
                    $scope.content = 'FULL';
                }
            }
        });
