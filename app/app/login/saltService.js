'use strict';

angular
        .module('aStore')
        .factory('SaltService', function ($resource, REST) {
            return $resource(REST.baseUrl + '/user/salt', {port: REST.port});
        });


//aStoreService.factory('Salt', function ($resource) {
//    return $resource('http://localhost\::port/aStore/rest/user/salt',
//            {port: 8080}, {getSalt: {method: 'GET', params: {email:'@email'}}});
//});
