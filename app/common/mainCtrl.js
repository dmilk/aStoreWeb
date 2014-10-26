'use strict';

angular.module('aStore.mainCtrl', ['tmh.dynamicLocale']).
        controller('mainCtrl', mainCtrl);

function mainCtrl($scope, $location, UserService, UserInfo, authFactory, TranslationService, tmhDynamicLocale) {

                    $scope.gotoLogin = function () {
                        UserService.referer = $location.path();
                    };
                    
                    $scope.logout = function() {
                        authFactory.logout();
                    };
                    

                    $scope.userInfo = UserInfo.get();
                    $scope.isAuthenticated = authFactory.isAuthenticated();


                    $scope.$on('authChanged', function (event, args) {
                        $scope.userInfo = UserInfo.get();
                        $scope.isAuthenticated = authFactory.isAuthenticated();
                    });


                    //Выполняем перевод, если произошло событие смены языка
                    $scope.translate = function () {
                        TranslationService.getTranslation($scope, $scope.selectedLanguage);
                        tmhDynamicLocale.set($scope.selectedLanguage);
                    };
                    // Инициализация
                    $scope.selectedLanguage = 'en';
                    $scope.translate();
                };
                
