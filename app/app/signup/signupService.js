'use strict';

angular
        .module('aStore')
        .factory('SignupService', signupService);

signupService.$inject = ['$resource', 'REST', 'authFactory', 'LocationService'];

function signupService($resource, REST, authFactory, LocationService) {

    var service = {
        submit: submit
    };

    return service;

    function submit(user) {

        var Signup = $resource(REST.baseUrl + '/user/signup', {port: REST.port});

        var Password = $resource(REST.baseUrl + '/user/password', {port: REST.port});

        var newSignup = new Signup();
        newSignup.firstName = user.firstname;
        newSignup.lastName = user.lastname;
        newSignup.email = user.email;
        newSignup.phone = user.phone;

        console.log(newSignup.firstName);

        newSignup.$save(
                function success(data) {
                    console.log('success signup');
                    var salt = data.salt;
                    console.log(salt);
                    var newPassword = new Password();
                    newPassword.login = user.email;
                    newPassword.password = CryptoJS.HmacSHA256(user.password, salt).toString();
                    console.log(newPassword.password);
                    newPassword.$save(
                            function success(data) {
                                console.log('success set password');
                                console.log(data.authToken);
                                //authFactory.setAuthData(data);
                                //$window.sessionStorage['authData'] = JSON.stringify(authFactory.authData);
                                LocationService.gotoBack();
                            },
                            function error(data, status) {
                                console.log('### Error: error set password');
                            });
                },
                function error(data, status) {
                    console.log('### Error: user already exist');
                });
        return "salt";
    }
}
;