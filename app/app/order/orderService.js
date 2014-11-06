'use strict';

angular
        .module('aStore')
        .factory('OrderService', orderService);

orderService.$inject = ['$resource', 'REST'];

function orderService($resource, REST) {
    var service = {
        findAll: findAll,
        setOrder: setOrder,
        getOrder: getOrder,
        order: order

    };

    return service;
    
    var order = {};
    
    function setOrder(order) {
        this.order = order;
    }
    
    function getOrder() {
        return this.order;
    }
    
    function findAll() {
        return $resource(REST.baseUrl + '/order', {port: REST.port}).query();
    }
}
