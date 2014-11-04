'use strict';

angular
        .module('aStore')
        .factory('UserService', userService);

userService.$inject = ['$resource', 'REST'];

function userService($resource, REST) {

    var service = {
        getInfo: getInfo
    };

    return service;

    function getInfo() {
        return $resource(REST.baseUrl + '/user/info', {port: REST.port}).get();
    }
}