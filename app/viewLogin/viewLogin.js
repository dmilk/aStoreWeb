'use strict';

angular.module('aStore.viewLogin', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/login', {
                    templateUrl: 'viewLogin/viewLogin.html',
                    controller: 'ViewLoginCtrl'
                });
            }])

        .controller('ViewLoginCtrl', function ($scope, $location, authFactory, UserService, UserInfo) {

            $scope.login = function (user) {
                console.log('Login = ' + user.login);
                console.log('Password = ' + user.password);

                authFactory.login(user).success(function (data) {
                    authFactory.setAuthData(data);



                }).error(function () {
                    console.log('ERROR ERROR ERROR')

                });
            };

            $scope.$on('authChanged', function (event, args) {
                console.log("authChanged authChanged authChanged authChanged authChanged authChanged");
            });

            $scope.zzzClick = function () {
                $scope.zzz = UserInfo.getUserInfo();
            }

            $scope.gotoBack = function () {
                $location.path(UserService.referer);
            };
        });