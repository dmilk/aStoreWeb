'use strict';

angular
        .module('aStore')
        .factory('UserInfo', function ($resource, REST) {
            return $resource(REST.baseUrl + '/user/info', {port: REST.port});
        });


//aStoreService.factory('UserInfo', function ($resource) {
//    return $resource('http://localhost\::port/aStore/rest/user/info',
//            {port: 8080}, {getUserInfo: {method: 'GET'}});
//});