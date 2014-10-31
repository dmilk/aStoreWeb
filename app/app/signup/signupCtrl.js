'use strict';

angular.module('aStore.signup', [])
        .config(config)
        .controller('signupCtrl', signupCtrl);

function config($routeProvider) {
    $routeProvider
            .when('/app/signup', {
                templateUrl: 'app/signup/signup.html',
                controller: 'signupCtrl',
                controllerAs: 'signup'
            });
}
;

function signupCtrl(SignupService, LocationService) {
    var vm = this;

    vm.submit = function (user) {
        SignupService.submit(user);
    };

    vm.cancel = function () {
        LocationService.gotoBack();
    };

    vm.fillForm = function (user) {
        console.log('fillForm2');
        user.email = 'ddd@dd';
        user.firstname = 'Oleg';
        user.lastname = 'Sorokin';
        user.phone = '7755529';
    };
}
;

