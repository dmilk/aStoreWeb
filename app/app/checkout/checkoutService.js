'use strict';

angular
        .module('aStore')
        .factory('CheckoutService', checkoutService);

checkoutService.$inject = ['$resource', 'REST', 'CartService'];

function checkoutService($resource, REST, CartService) {

    var service = {
        submit: submit
    };

    return service;

    function submit(purchase) {
        var Purchase = $resource(REST.baseUrl + '/purchase', {port: REST.port});
        var orderId = 0;

        var newPurchase = new Purchase();
        newPurchase.firstName = purchase.firstName;
        newPurchase.lastName = purchase.lastName;
        newPurchase.email = purchase.email;
        newPurchase.phone = purchase.phone;
        newPurchase.routeId = CartService.routeId;
        newPurchase.cart = CartService.getTickets();
        return newPurchase.$save(
                function (successData) {
            CartService.removeAll();
            orderId = successData.orderId;
            console.log('newPurchase ' + orderId);
            return orderId;
        }, function (errorData) {
            console.log('Error purchase: ' + errorData);
        }
        );

    }
}