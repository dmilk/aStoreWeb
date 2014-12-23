'use strict';

angular.module('aStore.mainCtrl', ['tmh.dynamicLocale']).
        controller('mainCtrl', mainCtrl);

function mainCtrl($scope, LocationService, UserService, authFactory, TranslationService, tmhDynamicLocale) {

                    $scope.savePath = function () {
                        LocationService.savePath();
                    };
                    
                    $scope.logout = function() {
//                        $scope.userInfo = {};
                        authFactory.logout();
                        $scope.userInfo = {};
                    };
                    

                    $scope.userInfo = UserService.getInfo();
                    //console.log('UserService.someEmail = ' + UserService.someEmail);
                    $scope.isAuthenticated = authFactory.isAuthenticated();


                    $scope.$on('authChanged', function (event, args) {
                        $scope.userInfo = UserService.getInfo();
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
                
