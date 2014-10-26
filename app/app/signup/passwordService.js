'use strict';

angular
        .module('aStore')
        .factory('PasswordService', function ($resource, REST) {
            return $resource(REST.baseUrl + '/user/password', {port: REST.port});
        });
