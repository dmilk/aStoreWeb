'use strict';

angular.module('aStore.viewCategory', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/viewCategory', {
                    templateUrl: 'viewCategory/viewCategory.html',
                    controller: 'ViewCategoryCtrl'
                });
            }])

        .controller('ViewCategoryCtrl', function ($scope, Category) {
            $scope.allCategories = Category.findAll();

        });