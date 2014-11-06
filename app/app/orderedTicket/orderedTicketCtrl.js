'use strict';

angular.module('aStore.orderedTicket', [])
        .config(config)
        .controller('orderedTicketCtrl', orderedTicketCtrl);

function config($routeProvider) {
    $routeProvider
            .when('/app/orderedTicket', {
                templateUrl: 'app/orderedTicket/orderedTicket.html',
                controller: 'orderedTicketCtrl',
                controllerAs: 'orderedTicket'
            });
};

function orderedTicketCtrl(OrderService, LocationService) {
    var vm = this;
    
    vm.order = OrderService.getOrder();
    
    vm.gotoBack = function() {
        LocationService.gotoBack();
    }
    
};

