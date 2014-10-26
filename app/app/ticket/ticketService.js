'use strict';

angular
        .module('aStore')
        .factory('TicketService', function ($resource, REST) {
            return $resource(REST.baseUrl + '/ticket/:categoryId',
                    {categoryId: '@categoryId', port: REST.port});
        });
