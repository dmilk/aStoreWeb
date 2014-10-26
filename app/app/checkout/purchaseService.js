'use strict';

angular
        .module('aStore')
        .factory('PurchaseService', function ($resource, REST) {
            return $resource(REST.baseUrl + '/purchase', {port: REST.port});
        });