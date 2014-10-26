'use strict';


angular
        .module('aStore.interceptor', ['ngResource'])
        .factory('authHttpRequestInterceptor', function ($rootScope, $injector) {
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
