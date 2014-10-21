angular.module('aStore.mainController', ['ngResource', 'tmh.dynamicLocale']).
        controller('mainController',
                function ($scope, $location, UserService, UserInfo, translationService, tmhDynamicLocale) {

                    $scope.gotoLogin = function () {
                        UserService.referer = $location.path();
                    }

                    $scope.userInfo = UserInfo.getUserInfo();

                    $scope.$on('authChanged', function (event, args) {
                        $scope.userInfo = UserInfo.getUserInfo();
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