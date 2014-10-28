'use strict';

angular
        .module('aStore')
        .factory('TestService', logger);

logger.$inject = ['$resource', 'REST'];

function logger($resource, REST) {

    var service = {
        getSalt: getSalt
    };

    return service;

    function getSalt(msg) {
        console.log(msg);
        console.log('logger.getSalt');
        var salt = $resource(REST.baseUrl + '/test/s', {port: REST.port}).get();
        salt.$promise.then(function (data) {
            console.log('salt=' + data.salt);
        });
        return salt;
//        return $resource(REST.baseUrl + '/test/s', {port: REST.port});
    }
};
