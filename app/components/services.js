var aStoreService = angular.module('aStore.services', ['ngResource']);

aStoreService.factory('authHttpRequestInterceptor', function ($rootScope, $injector) {
    var authHttpRequestInterceptor = {
        request: function ($request) {
            var authFactory = $injector.get('authFactory');
            if (authFactory.isAuthenticated()) {
                $request.headers['aStore-auth-token'] = authFactory.getAuthData().authToken;
            }
            return $request;
        }
    };
    return authHttpRequestInterceptor;
});

aStoreService.factory('authFactory', function ($rootScope, $http, $window) {

    var authFactory = {
        authData: undefined
    };

    authFactory.setAuthData = function (aData) {
        this.authData = {
            authToken: aData.authToken,
            authPermission: aData.authPermissionSet
        };
        $rootScope.$broadcast('authChanged');
    };

    authFactory.getAuthData = function () {
        return this.authData;
    };

    authFactory.isAuthenticated = function () {
        return !angular.isUndefined(this.getAuthData());
    };

    authFactory.login = function (user) {
        return $http.post('http://localhost:8080/aStore/rest/user/login', user);
    };

    authFactory.logout = function () {
        $window.sessionStorage.removeItem("authData");
        this.setAuthData({authToken: "", authPermission: ""});
        $rootScope.$broadcast('authChanged');
    };

    function init() {
        if ($window.sessionStorage["authData"]) {
            authFactory.setAuthData(JSON.parse($window.sessionStorage["authData"]));
        }
    }
    ;

    init();

    return authFactory;

});

aStoreService.factory('UserService', function () {
    return {
        referer: 'undef'
    };
});

aStoreService.factory('UserInfo', function ($resource) {
    return $resource('http://localhost\::port/aStore/rest/user/info',
            {port: 8080}, {getUserInfo: {method: 'GET'}});
});


aStoreService.factory('Test', function ($resource) {
    return $resource('http://localhost\::port/aStore/rest/test',
            {port: 8080}, {getHeader: {method: 'GET'}});
});




aStoreService.service('translationService', function ($resource) {

    this.getTranslation = function ($scope, language) {
        var languageFilePath = 'lang/translation_' + language + '.json';
//        console.log(languageFilePath);
        $resource(languageFilePath).get(function (data) {
            $scope.translation = data;
        });
    };
});






