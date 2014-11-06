'use strict';

angular.module('aStore.order', [])
        .config(config)
        .controller('orderedTicketCtrl', orderedTicket);

function config($routeProvider) {
    $routeProvider
            .when('/app/orderedTicket', {
                templateUrl: 'app/orderedTicket/orderedTicket.html',
                controller: 'orderedTicketCtrl',
                controllerAs: 'orderedTicket'
            });
};

function orderedTicketCtrl(OrderedTicketService) {
    var vm = this;
    
    vm.allOrders = OrderService.findAll();
    vm.showTickets = false;

    vm.getOrderedTickets = function(cn) {
        console.log('showTable ' + cn);
        vm.showTickets = !vm.showTickets;
        vm.orderedTickets = OrderedTicketService.findOrderedTickets(cn);
        
    }
};

