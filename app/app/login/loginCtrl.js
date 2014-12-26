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
    var errorMsg = {};
    vm.errorMsg = errorMsg;

    vm.submit = function (user) {
//        errorMsg.txt = "msg init";
//        console.log("1msg " + errorMsg.txt)
        errorMsg.tlxt = undefined;
        LoginService.submit(user, errorMsg);
//        console.log("2msg " + errorMsg.txt)
    };

    vm.cancel = function () {
        LocationService.gotoBack();
    };
}
;

