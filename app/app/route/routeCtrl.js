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
}
;

function routeCtrl(RouteService, CartService, TestService, authFactory) {
    var vm = this;
    vm.allRoutes = RouteService.query();

    vm.testClick = function () {
//        console.log("testClick");
        //vm.test = TestService.getSalt("Hello world!");
        authFactory.logout();

    };

    vm.clickRoute = function (route) {
        CartService.routeId = route.id;
    };

    vm.clickRouteId = function (id) {
        CartService.routeId = id;
    };

}
;

