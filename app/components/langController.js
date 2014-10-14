angular.module('aStore.langController', ['ngResource', 'tmh.dynamicLocale']).
        controller('langController',
//function testController($scope, translationService){  
                function ($scope, $location, UserService, translationService, tmhDynamicLocale) {
                    
                    $scope.gotoLogin = function() {
                        $scope.xxx = $location.path();
                        UserService.referer = $location.path();
                    }
                    
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