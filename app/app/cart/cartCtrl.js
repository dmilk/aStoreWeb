'use strict';

angular.module('aStore.cart', [])
        .config(config)
        .controller('cartCtrl', cartCtrl)

function config($routeProvider) {
    $routeProvider
            .when('/app/cart', {
                templateUrl: 'app/cart/cart.html',
                controller: 'cartCtrl',
                controllerAs: 'cart'
            });
}
;

function cartCtrl($location, CartService, SupportingDocumentService) {
    var vm = this;

    vm.Cart = CartService;
    vm.allSupportingDocuments = SupportingDocumentService.query();

    var currentDate = new Date();
    //var dob = {};
    //dob.year = currentDate.getFullYear();
    //dob.month = currentDate.getMonth() + 1;
    //vm.dob = dob;

    var years = new Array();
    for (var i = currentDate.getFullYear() - 100; i <= currentDate.getFullYear(); i++) {
        years.push(i);
    }
    var months = new Array();
    for (var i = 1; i < 13; i++) {
        months.push(i);
    }
    vm.years = years;
    vm.months = months;
    vm.updateDob = updateDob;

    function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }

    function updateDob(ticket) {
        console.log("updateDob " + ticket);
        if (ticket) {
            var days = new Array();
            for (var i = 1; i <= daysInMonth(ticket.dob.month, ticket.dob.year); i++) {
                days.push(i);
            }
            ticket.days = days;
            if (ticket) {
                ticket.dobString = ticket.dob.year + '.' + ticket.dob.month + '.' + ticket.dob.day;
            }
        }
    }
    ;


    updateScope();
    updateDob();

    function updateScope() {
        vm.content = CartService.getTickets();
        vm.total = CartService.getTotal();
        // уходим из корзины раз там пусто
        if (CartService.size() === 0) {
            $location.path("#");
        }
    }

    vm.remove = function (ticket) {
        CartService.remove(ticket);
        updateScope();
    };

    vm.removeAll = function () {
        CartService.removeAll();
        updateScope();
        $location.path("#");
    };
}
;

