'use strict';

angular.module('aStore.checkout', [])
        .config(config)
        .controller('checkoutCtrl', checkoutCtrl);

function config($routeProvider) {
    $routeProvider
            .when('/app/checkout', {
                templateUrl: 'app/checkout/checkout.html',
                controller: 'checkoutCtrl',
                controllerAs: 'checkout'
            });
}
;

function checkoutCtrl($location, CartService, CheckoutService, PurchaseService) {
    var vm = this;
    vm.Cart = CartService;

    // init scope:
    vm.subtotal = CartService.getTotal();
    vm.surcharge = 10;
    vm.total = vm.surcharge + parseFloat(CartService.getTotal());

    // make purchase:
    vm.submitPurchase = function () {
        // create new Purchase service:
        var newPurchase = new PurchaseService();
        // initialize it with data:
        newPurchase.firstName = vm.purchase.firstName;
        newPurchase.secondName = vm.purchase.secondName;
        newPurchase.email = vm.purchase.email;
        newPurchase.phone = vm.purchase.phone;
        newPurchase.routeId = CartService.routeId;
        newPurchase.cart = CartService.getTickets();
        
//        CheckoutService.log(vm.purchase);
        // and persist it:
        newPurchase.$save(function success(data) {
            // empty the cart:
            CartService.removeAll();
            // init scope with purchase confirmation number:
            vm.orderId = data.orderId;
        });
    };

    // cancel purchase:
    vm.cancelPurchase = function () {
        CartService.removeAll();
        $location.path("#");
    }

    // start shopping again:
    vm.startShoppingAgain = function () {
        $location.path("#");
    }

}
;

//angular.module('aStore.viewCheckout', ['ngRoute'])
//
//        .config(['$routeProvider', function ($routeProvider) {
//                $routeProvider.when('/viewCheckout', {
//                    templateUrl: 'viewCheckout/viewCheckout.html',
//                    controller: 'ViewCheckoutCtrl'
//                });
//            }])
//
//        .controller('ViewCheckoutCtrl', function ($scope, $location, Cart, Purchase) {
//            $scope.Cart = Cart;
//
//            // init scope:
//            $scope.subtotal = Cart.getTotal();
//            $scope.surcharge = 1;
//            $scope.total = $scope.surcharge + parseFloat(Cart.getTotal());
//
//            // make purchase:
//            $scope.submitPurchase = function (invalid) {
//                // create new Purchase service:
//                var newPurchase = new Purchase();
//                // initialize it with data:
//                console.log('newPurchase');
//                newPurchase.firstName = $scope.purchase.firstName;
//                newPurchase.secondName = $scope.purchase.secondName;
//                newPurchase.email = $scope.purchase.email;
//                newPurchase.phone = $scope.purchase.phone;
//                newPurchase.routeId = Cart.routeId;
//                newPurchase.cart = Cart.getTickets();
//                //newPurchase.surCharge = $scope.surcharge;
//                // and persist it:
//                newPurchase.$save(function success(data) {
//                    // empty the cart:
//                    Cart.removeAll();
//                    // init scope with purchase confirmation number:
//                    $scope.orderId = data.orderId;
//                });
//
//            }
//
//            // cancel purchase:
//            $scope.cancelPurchase = function () {
//                Cart.removeAll();
//                $location.path("#");
//            }
//
//            // start shopping again:
//            $scope.startShoppingAgain = function () {
//                $location.path("#");
//            }
//
//
//        });


