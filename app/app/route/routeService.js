'use strict';

angular
        .module('aStore')
        .factory('RouteService', function ($resource, REST) {
            return $resource(REST.baseUrl + '/route', {port: REST.port});
        });
