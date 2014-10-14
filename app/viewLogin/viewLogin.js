'use strict';

angular.module('aStore.viewLogin', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/login', {
                    templateUrl: 'viewLogin/viewLogin.html',
                    controller: 'ViewLoginCtrl'
                });
            }])

        .controller('ViewLoginCtrl', function ($scope, $location, UserService) {
            $scope.login_begin = 1;
            $scope.r = UserService.referer;
            
            $scope.gotoBack = function() {
                $location.path(UserService.referer);
            }
        });