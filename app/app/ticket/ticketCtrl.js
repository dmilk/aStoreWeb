'use strict';

angular.module('aStore.ticket', [])
        .config(config)
        .controller('ticketCtrl', ticketCtrl);

function config($routeProvider) {
    $routeProvider
            .when('/app/ticket/:categoryId', {
                templateUrl: 'app/ticket/ticket.html',
                controller: 'ticketCtrl',
                controllerAs: 'ticket'
            });
}
;

function ticketCtrl($routeParams, TicketService, CartService, LocationService) {
    var vm = this;
    vm.Cart = CartService; // для отображения на экране
//    vm.allTickets = TicketService.findByCategory({categoryId: $routeParams.categoryId});
    vm.allTickets = TicketService.query({categoryId: $routeParams.categoryId});

    vm.addToCart = function (ticket) {
        CartService.add(ticket);
    };
    
    vm.gotoBack = function() {
        LocationService.gotoBack();
    }
}
;
