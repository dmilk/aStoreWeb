'use strict';

angular
        .module('aStore')
        .factory('CheckoutService', function () {
            console.log('checkout service');
            var newPurchase = function () {
                this.log = function (p) {
                    console.log('log func');
                    console.log(p);
                    console.log(p.firstName);
                    console.log(p.routeId);
                };

                this.submit = function ($resource, REST) {
                    return $resource(REST.baseUrl + '/purchase', {port: REST.port});
                }
            };
            return new newPurchase();
        });

