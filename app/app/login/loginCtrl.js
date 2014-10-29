'use strict';

angular.module('aStore.login', [])
        .config(config)
        .controller('loginCtrl', loginCtrl);


function config($routeProvider) {
    $routeProvider
            .when('/app/login', {
                templateUrl: 'app/login/login.html',
                controller: 'loginCtrl',
                controllerAs: 'login'
            });
}
;

function loginCtrl(LocationService, LoginService) {
    var vm = this;
    
    vm.submit = function(user) {
        LoginService.submit(user);
    };
    
    vm.cancel = function () {
        LocationService.gotoBack();
    };
}
;
