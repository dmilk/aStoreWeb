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
    
    vm.allOrders = OrderService.findAll();
    vm.showTickets = false;

    vm.getOrderedTickets = function(cn) {
        console.log('showTable ' + cn);
        vm.showTickets = !vm.showTickets;
        vm.orderedTickets = OrderService.findOrderedTickets(cn);
        
    }
};

