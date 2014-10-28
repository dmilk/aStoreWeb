'use strict';

angular
        .module('aStore')
        .factory('authFactory', function ($rootScope, $http, $window) {

            var authFactory = {
                authData: undefined
            };

            authFactory.setAuthData = function (aData) {
                this.authData = {
                    authToken: aData.authToken,
                    authPermission: aData.authPermissionSet
                };
                $rootScope.$broadcast('authChanged');
            };

            authFactory.getAuthData = function () {
                return this.authData;
            };

            authFactory.isAuthenticated = function () {
                return !angular.isUndefined(this.getAuthData());
            };

            authFactory.login = function (user) {
                return $http.post('http://localhost:8080/aStore/rest/user/login', user);
            };

            authFactory.logout = function () {
                $window.sessionStorage.removeItem("authData");
//                this.setAuthData({authToken: "", authPermission: ""});
                this.authData = undefined;
                $rootScope.$broadcast('authChanged');
            };

            function init() {
                if ($window.sessionStorage["authData"]) {
                    authFactory.setAuthData(JSON.parse($window.sessionStorage["authData"]));
                }
            }
            ;

            init();

            return authFactory;

        });

