'use strict';

angular.module('aStore.login', [])
        .config(config)
        .controller('loginCtrl', loginCtrl);

function config($routeProvider) {
    $routeProvider
            .when('/app/login', {
                templateUrl: 'app/login/login.html',
                controller: 'loginCtrl',
                controllerAs: 'login'
            });
}
;

function loginCtrl($location, $window, authFactory, LocationService, SaltService) {
    var vm = this;
    
    vm.submit = function (user) {
        var salt = SaltService.get({email: user.login});
        salt.$promise.then(function (data) {
            console.log('salt=' + data.salt);
            var password = user.password;
            user.password = CryptoJS.HmacSHA256(password, data.salt).toString();
            console.log('hash=' + user.password);
            authFactory.login(user).success(function (data) {
                authFactory.setAuthData(data);
                $window.sessionStorage['authData'] = JSON.stringify(authFactory.authData);
                $location.path(LocationService.referer);
            }).error(function (data, status) {
                console.log('ERROR');
                console.log('data: ' + data);
                console.log('status: ' + status);
            });
            password = '';
        });
    };
    vm.gotoBack = function () {
        $location.path(LocationService.referer);
    };
}
;

//angular.module('aStore.viewLogin', ['ngRoute'])
//
//        .config(['$routeProvider', function ($routeProvider) {
//                $routeProvider.when('/login', {
//                    templateUrl: 'viewLogin/viewLogin.html',
//                    controller: 'ViewLoginCtrl'
//                });
//            }])
//
//        .controller('ViewLoginCtrl', function ($scope, $location, $window, authFactory, UserService, Salt) {
//
//            $scope.login = function (user) {
//                var salt = Salt.getSalt({email: user.login});
//                $scope.x = salt;
//                salt.$promise.then(function (data) {
//                    console.log('salt=' + data.salt);
//                    var password = user.password;
//                    user.password = CryptoJS.HmacSHA256(password, data.salt).toString();
//                    password = '';
//                    console.log('hash=' + user.password);
//                    authFactory.login(user).success(function (data) {
//                        authFactory.setAuthData(data);
//                        $window.sessionStorage['authData'] = JSON.stringify(authFactory.authData);
//                    }).error(function (data, status) {
//                        console.log('ERROR ERROR ERROR');
//                        console.log('data: ' + data);
//                        console.log('status: ' + status);
//                    });
//
//                });
//            };
//
//            $scope.gotoBack = function () {
//                $location.path(UserService.referer);
//            };
//        });
