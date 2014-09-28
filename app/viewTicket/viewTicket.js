'use strict';

angular.module('aStore.viewTicket', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/viewTicket/:categoryId', {
                    templateUrl: 'viewTicket/viewTicket.html',
                    controller: 'ViewTicketCtrl'
                });
            }])

        .controller('ViewTicketCtrl', function ($scope, $routeParams, Ticket, Cart) {
            $scope.allTickets = Ticket.findByCategory({categoryId: $routeParams.categoryId});
            $scope.Cart = Cart;

            $scope.addToCart = function(ticket) {
                Cart.add(ticket);
            };

        });