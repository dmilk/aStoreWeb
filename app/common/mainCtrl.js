'use strict';

angular.module('aStore.mainCtrl', ['ngResource', 'tmh.dynamicLocale']).
        controller('mainCtrl',
                function ($scope, $location, UserService, UserInfo, authFactory, translationService, tmhDynamicLocale) {

                    $scope.gotoLogin = function () {
                        UserService.referer = $location.path();
                    }
                    
                    $scope.logout = function() {
                        authFactory.logout();
                    }
                    
                    $scope.hmacClick = function () {
                        var hash = CryptoJS.HmacSHA256("Message", "Secret Passphrase1");
                        console.log(hash);
                        console.log(hash.toString().length);
                    }
                    


                    $scope.userInfo = UserInfo.getUserInfo();
                    $scope.isAuthenticated = authFactory.isAuthenticated();


                    $scope.$on('authChanged', function (event, args) {
                        $scope.userInfo = UserInfo.getUserInfo();
                        $scope.isAuthenticated = authFactory.isAuthenticated();
                    });


                    //Выполняем перевод, если произошло событие смены языка
                    $scope.translate = function () {
                        translationService.getTranslation($scope, $scope.selectedLanguage);
                        tmhDynamicLocale.set($scope.selectedLanguage);
                    };
                    // Инициализация
                    $scope.selectedLanguage = 'en';
                    $scope.translate();
                }

        );