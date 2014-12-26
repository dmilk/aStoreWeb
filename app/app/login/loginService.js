'use strict';

angular
        .module('aStore')
        .factory('LoginService', loginService);

loginService.$inject = ['$window', '$resource', '$rootScope', 'REST', 'authFactory', 'LocationService'];

function loginService($window, $resource, $rootScope, REST, authFactory, LocationService) {

    var service = {
        submit: submit
    };
    return service;

    function submit(user, errorMsg) {
//        console.log("msg in service " + errorMsg);
//        errorMsg.txt = "ffff";
//        console.log("msg new service " + errorMsg);

        var salt = $resource(REST.baseUrl + '/user/salt', {port: REST.port}).get({email: user.login});
        salt.$promise.then(function (data) {
//            console.log(data.salt);
            var newUser = angular.copy(user);
            newUser.password = CryptoJS.HmacSHA256(newUser.password, data.salt).toString();
//            console.log(newUser.password);
            authFactory.login(newUser).success(function (data) {
                authFactory.setAuthData(data);
                $window.sessionStorage['authData'] = JSON.stringify(authFactory.authData);
                LocationService.gotoBack();
//                $location.path(LocationService.referer);
            }).error(function (data, status) {
                var msg = "Неверный логин или пароль";
//                window.alert(errorMsg);
//                console.log('ERROR, data: ' + data + 'status: ' + status);
                errorMsg.txt = msg + ' ' + data;
            });
        });
    }
}
;
