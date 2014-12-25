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

function orderCtrl(OrderService, LocationService) {
    var vm = this;
    
    vm.allOrders = OrderService.findAll();

    vm.orderedTicket = function(order) {
        OrderService.setOrder(order);
        LocationService.gotoOrderedTicket();
    };
    
    vm.testRole = function() {
        vm.res = OrderService.testRole();
    }
    
};
