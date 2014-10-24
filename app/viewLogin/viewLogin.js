'use strict';

angular.module('aStore.viewLogin', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/login', {
                    templateUrl: 'viewLogin/viewLogin.html',
                    controller: 'ViewLoginCtrl'
                });
            }])

        .controller('ViewLoginCtrl', function ($scope, $location, $window, authFactory, UserService) {

            $scope.login = function (user) {
                authFactory.login(user).success(function (data) {
                    authFactory.setAuthData(data);
                    $window.sessionStorage["authData"] = JSON.stringify(authFactory.authData);
                }).error(function (data, status) {
                    console.log('ERROR ERROR ERROR');
                    console.log('data: ' + data);
                    console.log('status: ' + status);
                });
            };

//            $scope.$on('authChanged', function (event, args) {
//                console.log("authChanged authChanged authChanged authChanged authChanged authChanged");
//            });

            $scope.gotoBack = function () {
                $location.path(UserService.referer);
            };
        });