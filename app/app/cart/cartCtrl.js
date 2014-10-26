'use strict';

angular.module('aStore.cart', [])
        .config(config)
        .controller('cartCtrl', cartCtrl)

function config($routeProvider) {
    $routeProvider
            .when('/app/cart', {
                templateUrl: 'app/cart/cart.html',
                controller: 'cartCtrl',
                controllerAs: 'cart'
            });
}
;

function cartCtrl($location, CartService) {
    var vm = this;

    vm.Cart = CartService;

    updateScope();

    function updateScope() {
        vm.content = CartService.getTickets();
        vm.total = CartService.getTotal();
        // уходим из корзины раз там пусто
        if (CartService.size() == 0) {
            $location.path("#");
        }
    }

    vm.remove = function (ticket) {
        CartService.remove(ticket);
        updateScope();
    };

    vm.removeAll = function () {
        CartService.removeAll();
        updateScope();
        $location.path("#");
    };
}
;

//angular.module('aStore.viewCart', ['ngRoute'])
//
//        .config(['$routeProvider', function ($routeProvider) {
//                $routeProvider.when('/viewCart', {
//                    templateUrl: 'viewCart/viewCart.html',
//                    controller: 'ViewCartCtrl'
//                });
//            }])
//
//        .controller('ViewCartCtrl', function ($scope, $location, Cart) {
//            $scope.Cart = Cart;
//
//            updateScope();
//
//            function updateScope() {
//                $scope.cartContent = Cart.getTickets();
//                $scope.total = Cart.getTotal();
//                // уходим из корзины раз там пусто
//                if (Cart.size() == 0) {
//                    $location.path("#");
//                }
//            }
//
//            $scope.remove = function (ticket) {
//                Cart.remove(ticket);
//                updateScope();
//            };
//
//            $scope.removeAll = function () {
//                Cart.removeAll();
//                updateScope();
//                $location.path("#");
//            };
//
//        });