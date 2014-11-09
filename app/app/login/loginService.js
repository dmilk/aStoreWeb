'use strict';

angular
        .module('aStore')
        .factory('LoginService', loginService);

//loginService.$inject = ['$window', '$resource', 'REST', 'authFactory', 'LocationService'];
loginService.$inject = ['$resource', 'REST', 'authFactory', 'LocationService'];

//function loginService($window, $resource, REST, authFactory, LocationService) {
function loginService($resource, REST, authFactory, LocationService) {

    var service = {
        submit: submit
    };

    return service;

    function submit(user) {
        var salt = $resource(REST.baseUrl + '/user/salt', {port: REST.port}).get({email: user.login});
        salt.$promise.then(function (data) {
            console.log(data.salt);
            var newUser = angular.copy(user);
            newUser.password = CryptoJS.HmacSHA256(newUser.password, data.salt).toString();
            console.log(newUser.password);
            authFactory.login(newUser).success(function (data) {
                authFactory.setAuthData(data);
//                $window.sessionStorage['authData'] = JSON.stringify(authFactory.authData);
                LocationService.gotoBack();
//                $location.path(LocationService.referer);
            }).error(function (data, status) {
                console.log('ERROR, data: ' + data + 'status: ' + status);
            });
        });
     //   return salt;
    }
};
