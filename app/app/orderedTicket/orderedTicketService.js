'use strict';

angular
        .module('aStore')
        .factory('OrderedTicketService', orderedTicketService);

orderedTicketService.$inject = ['$resource', 'REST'];

function orderedTicketService($resource, REST) {
    var service = {
        findOrderedTickets: findOrderedTickets
    };

    return service;

    function findOrderedTickets(cn) {
        console.log("service " + cn);
        return $resource(REST.baseUrl + '/orderedTicket', {port: REST.port}).query({cn:cn});
    }
}
