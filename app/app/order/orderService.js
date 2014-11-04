'use strict';

angular
        .module('aStore')
        .factory('OrderService', orderService);

orderService.$inject = ['$resource', 'REST'];

function orderService($resource, REST) {
    var service = {
        findAll: findAll,
        findOrderedTickets: findOrderedTickets
    };

    return service;

    function findAll() {
        return $resource(REST.baseUrl + '/order', {port: REST.port}).query();
    }
    
    function findOrderedTickets(cn) {
        console.log("service " + cn);
        return $resource(REST.baseUrl + '/orderedTicket', {port: REST.port}).query({cn:cn});
    }
}


//angular
//        .module('aStore')
//        .factory('OrderService', function ($resource, REST) {
//            return $resource(REST.baseUrl + '/order', {port: REST.port});
//        });
