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

function signupCtrl($scope, SignupService, LocationService) {
    var vm = this;

    vm.user = {};

    vm.submit = function (user) {
        SignupService.submit(user);
    };

    vm.cancel = function () {
        LocationService.gotoBack();
    };

    vm.initForm = function () {
        console.log('init func');
        vm.user.email = 'ddd@dd';
        vm.user.firstname = 'Oleg';
        vm.user.lastname = 'Sorokin';
        vm.user.phone = '7755529';
    };
    
    this.initForm();
}
;

