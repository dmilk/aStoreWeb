angular.module('aStore.mainController', ['ngResource', 'tmh.dynamicLocale']).
        controller('mainController',
                function ($scope, $location, UserService, UserInfo, translationService, tmhDynamicLocale) {

                    $scope.gotoLogin = function () {
                        UserService.referer = $location.path();
                    }
                    
                    $scope.hmacClick = function () {
                        var hash = CryptoJS.HmacSHA256("Message", "Secret Passphrase1");
                        console.log(hash);
                        console.log(hash.toString().length);
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