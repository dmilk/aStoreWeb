'use strict';

angular
        .module('aStore')
        .factory('OrderService', function ($resource, REST) {
            return $resource(REST.baseUrl + '/order', {port: REST.port});
        });
