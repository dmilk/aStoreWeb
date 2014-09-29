'use strict';

angular.module('aStore.viewCheckout', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/viewCheckout', {
                    templateUrl: 'viewCheckout/viewCheckout.html',
                    controller: 'ViewCheckoutCtrl'
                });
            }])

        .controller('ViewCheckoutCtrl', function ($scope, $location, Cart, Purchase) {
            $scope.Cart = Cart;

            // init scope:
            $scope.subtotal = Cart.getTotal();
            $scope.surcharge = 1;
            $scope.total = $scope.surcharge + parseFloat(Cart.getTotal());

            // make purchase:
            $scope.submitPurchase = function(invalid) {
//                if (invalid) {
//                    // form is not valid - show validation errors:
//                    $scope.showError = true;
//                    console.log('invalid');
//                    return;
//                }
                // create new Purchase service:
                var newPurchase = new Purchase();
                // initialize it with data:
                console.log('newPurchase');
                newPurchase.firstName = $scope.purchase.firstName;
                newPurchase.secondName = $scope.purchase.secondName;
                newPurchase.email = $scope.purchase.email;
                newPurchase.phone = $scope.purchase.phone;
                newPurchase.routeId = Cart.routeId;
                newPurchase.cart = Cart.getTickets();
                //newPurchase.surCharge = $scope.surcharge;
                // and persist it:
                newPurchase.$save(function success(data) {
                    // empty the cart:
                    Cart.removeAll();
                    // init scope with purchase confirmation number:
                    $scope.orderId = data.orderId;
                });

            }

            // cancel purchase:
            $scope.cancelPurchase = function() {
                Cart.removeAll();
                $location.path("#");
            }

            // start shopping again:
            $scope.startShoppingAgain = function() {
                $location.path("#");
            }


        });


