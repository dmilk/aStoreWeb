'use strict';

angular.module('aStore.category', [])
        .config(config)
        .controller('categoryCtrl', categoryCtrl);

function config($routeProvider) {
    $routeProvider
            .when('/app/category', {
                templateUrl: 'app/category/category.html',
                controller: 'categoryCtrl',
                controllerAs: 'category'
            });
};

function categoryCtrl(CategoryService, LocationService) {
    var vm = this;
    vm.allCategories = CategoryService.query();
    
    vm.savePath = function() {
        LocationService.savePath();
    }
};
