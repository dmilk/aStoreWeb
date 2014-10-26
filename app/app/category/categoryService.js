'use strict';

angular
        .module('aStore')
        .factory('CategoryService', function ($resource, REST) {
            return $resource(REST.baseUrl + '/category', {port: REST.port});
        });
