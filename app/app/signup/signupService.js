'use strict';

angular
        .module('aStore')
        .factory('SignupService', function ($resource, REST) {
            return $resource(REST.baseUrl + '/user/signup', {port: REST.port});
        });
