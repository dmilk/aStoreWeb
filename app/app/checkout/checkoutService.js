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
        newPurchase.route = {};
        var route = {};
        route.id = CartService.routeId;
        newPurchase.route = route;
        
        var orderedTicketCollection = {};
//        orderedTicketCollection = CartService.getTickets();
        orderedTicketCollection = CartService.getOrderedTicketCollection();
        newPurchase.orderedTicketCollection = orderedTicketCollection;
        console.log(JSON.stringify(newPurchase));
        return newPurchase.$save(
                function (successData) {
            CartService.removeAll();
            orderId = successData.orderId;
            console.log('Data ' + successData);
            console.log('CN ' + successData.confirmationNumber);
            console.log('newPurchase ' + orderId);
            return orderId;
        }, function (errorData) {
            console.log('Error purchase: ' + errorData + ' ' + orderId);
        }
        );

    }
}