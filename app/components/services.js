var aStoreService = angular.module('aStore.services', ['ngResource']);

aStoreService.factory('authHttpRequestInterceptor', function ($rootScope, $injector) {
    var authHttpRequestInterceptor = {
        request: function ($request) {
            var authFactory = $injector.get('authFactory');
            if (authFactory.isAuthenticated()) {
                $request.headers['aStore-auth-id'] = authFactory.getAuthData().authId;
                $request.headers['aStore-auth-token'] = authFactory.getAuthData().authToken;
            }
            return $request;
        }
    };
    return authHttpRequestInterceptor;
});

aStoreService.factory('authFactory', function ($rootScope, $http) {

    var authFactory = {
        authData: undefined
    };

    authFactory.setAuthData = function (authData) {
        this.authData = {
            authId: authData.authId,
            authToken: authData.authToken,
            authPermission: authData.authPermissionSet
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

aStoreService.factory('Route', function ($resource) {
    return $resource('http://localhost\::port/aStore/rest/route',
            {port: 8080}, {findAll: {method: 'GET', isArray: true}});
});

aStoreService.factory('Category', function ($resource) {
    return $resource('http://localhost\::port/aStore/rest/category',
            {port: 8080}, {findAll: {method: 'GET', isArray: true}});
});

aStoreService.factory('Ticket', function ($resource) {
    return $resource('http://localhost\::port/aStore/rest/ticket/:categoryId',
            {categoryId: '@categoryId', port: 8080}, {findByCategory: {method: 'GET', isArray: true}});
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

aStoreService.factory('Purchase', function ($resource) {
    return $resource('http://localhost\::port/aStore/rest/purchase/',
            {port: 8080}, {});
});

aStoreService.factory('Cart', function () {
    var shoppingCart = function () {
        this.routeId = 0;
        this.items = [];
        this.listeners = [];
        this.add = function (ticket) {
            ticket.number = this.size();
            this.items.push(angular.copy(ticket));
            this.fireChanges();
        }
        this.fireChanges = function () {
            for (var i = 0; i < this.listeners.length; i++) {
                this.listeners[i].call();
            }
        }
        this.remove = function (ticket) {
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i] === ticket) {
                    this.items.splice(i, 1);
                    this.fireChanges();
                    return;
                }
            }
        }
        this.removeAll = function () {
            this.items = [];
            this.fireChanges();
        }
        this.size = function () {
            return this.items.length;
        }
        this.getTickets = function () {
            return this.items;
        }
        this.addListener = function (listener) {
            this.listeners.push(listener);
        }
        this.getTotal = function () {
            var total = 0;
            for (var i = 0; i < this.items.length; i++) {
                total += this.items[i].price;
            }
            return total.toFixed(2);
        }

    };
    return new shoppingCart();
});