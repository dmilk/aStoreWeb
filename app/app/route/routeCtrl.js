'use strict';

angular.module('aStore.route', [])
        .config(config)
        .controller('routeCtrl', routeCtrl);

function config($routeProvider) {
    $routeProvider
            .when('/app/route', {
                templateUrl: 'app/route/route.html',
                controller: 'routeCtrl',
                controllerAs: 'route'
            });
};

function routeCtrl(RouteService, CartService) {
    var vm = this;
    vm.allRoutes = RouteService.query();

    vm.clickRoute = function (route) {
        CartService.routeId = route.id;
    };
};

