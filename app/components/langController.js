angular.module('aStore.langController', ['ngResource', 'tmh.dynamicLocale']).
        controller('langController',
//function testController($scope, translationService){  
                function ($scope, translationService, tmhDynamicLocale) {

                    //Выполняем перевод, если произошло событие смены языка
                    $scope.translate = function () {
                        translationService.getTranslation($scope, $scope.selectedLanguage);
                        tmhDynamicLocale.set($scope.selectedLanguage);
                    };
                    // Инициализация
                    $scope.selectedLanguage = 'en';
                    $scope.translate();
                });