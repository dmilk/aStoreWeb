'use strict';

angular
        .module('aStore')
        .service('TranslationService', function ($resource) {

            this.getTranslation = function ($scope, language) {
                var languageFilePath = 'lang/translation_' + language + '.json';
//        console.log(languageFilePath);
                $resource(languageFilePath).get(function (data) {
                    $scope.translation = data;
                });
            };
        });



        