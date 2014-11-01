'use strict';

angular.module('aStore.order', [])
        .config(config)
        .controller('orderCtrl', orderCtrl);

function config($routeProvider) {
    $routeProvider
            .when('/app/order', {
                templateUrl: 'app/order/order.html',
                controller: 'orderCtrl',
                controllerAs: 'order'
            });
};

function orderCtrl(OrderService) {
    var vm = this;
    vm.allOrders = OrderService.query();

//    vm.clickRoute = function (route) {
//        CartService.routeId = route.id;
//    };
};

