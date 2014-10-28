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

function signupCtrl($scope, $location, SignupService, PasswordService, LocationService) {
    var vm = this;
    
    vm.submit = function(user) {
        console.log("signup service");
        SignupService.submit(user);
    };
    
//    vm.submit = function (user) {
//        var newSignup = new SignupService();
//        console.log('newSignup');
//        console.log(user.email);
//        newSignup.firstName = user.firstname;
//        newSignup.lastName = user.lastname;
//        newSignup.email = user.email;
//        newSignup.phone = user.phone;
//        newSignup.$save(
//                function success(data) {
//                    console.log('success signup');
//                    var salt = data.salt;
//                    console.log(salt);
//                    var newPassword = new PasswordService();
//                    newPassword.login = user.email;
//                    newPassword.password = CryptoJS.HmacSHA256(user.password, salt).toString();
//                    console.log(newPassword.password);
//                    newPassword.$save(
//                            function success(data) {
//                                console.log('success set password');
//                                console.log(data.authToken);
//                                //authFactory.setAuthData(data);
//                                //$window.sessionStorage['authData'] = JSON.stringify(authFactory.authData);
//                                $location.path(LocationService.referer);
//                            },
//                            function error(data, status) {
//                                console.log('### Error: error set password');
//                            });
//                },
//                function error(data, status) {
//                    console.log('### Error: user already exist');
//                });
//    };
}
;

//angular.module('aStore.viewSignup', ['ngRoute'])
//
//        .config(['$routeProvider', function ($routeProvider) {
//                $routeProvider.when('/signup', {
//                    templateUrl: 'viewSignup/viewSignup.html',
//                    controller: 'ViewSignupCtrl'
//                });
//            }])
//
//        .controller('ViewSignupCtrl', function ($scope, Signup, Password) {
//            $scope.testUser = function () {
//                var Q;
//                console.log($scope.user.email);
//                //user.email = 'mail@example.com';
//                //Q.password = '123';
//                //Q.confirmPassword = '123';
//                //Q.firstname = 'A';
//                //Q.lastname = 'Anonymous';
//                //Q.phone = '111-222-333';
//                //$scope.user.salt = 'Q';
//            };
//
//            $scope.submit = function (user) {
//                var newSignup = new Signup();
//                console.log('newSignup');
//                console.log(user.email);
//                newSignup.firstName = user.firstname;
//                newSignup.lastName = user.lastname;
//                newSignup.email = user.email;
//                newSignup.phone = user.phone;
//                newSignup.$save(
//                        function success(data) {
//                            console.log('success signup');
//                            var salt = data.salt;
//                            console.log(salt);
//                            var newPassword = new Password();
//                            newPassword.login = user.email;
//                            newPassword.password = CryptoJS.HmacSHA256(user.password, salt).toString();
//                            console.log(newPassword.pwd);
//                            newPassword.$save(
//                                    function success(data) {
//                                        console.log('success set password');
//                                        console.log(data.authToken);
//                                    },
//                                    function error(data, status) {
//                                        console.log('### Error: error set password');
//                                    });
//                        },
//                        function error(data, status) {
//                            console.log('### Error: user already exist');
//                        });
//            };
//        })
//        ;