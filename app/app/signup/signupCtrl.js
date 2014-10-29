'use strict';

angular.module('aStore.signup', [])
        .config(config)
        .controller('signupCtrl', signupCtrl)
        .controller('myCtrl', myCtrl);

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
    
    vm.submit = function(user) {
        SignupService.submit(user);
    };
    
    vm.cancel = function() {
        LocationService.gotoBack();
    };
    
    vm.fillForm = function() {
        console.log('fillForm');
        vm.inputEmail = 'a@a';
    };
}
;

function myCtrl() {
    console.log('myCtrl');
    var vm2 = this;
    vm2.test = 'xxxx';
    vm2.signupForm.inputEmail = 'a@a';
}