'use strict';

angular
        .module('aStore')
        .factory('CartService', function () {
            var shoppingCart = function () {
                this.routeId = 0;
                this.items = [];
                this.listeners = [];
                this.add = function (ticket) {
                  var dob = {};
                  dob.year = 1999;
                  dob.month = 1;
                  dob.day = 1;
                  ticket.dob = dob;
                    ticket.number = this.size();
                    this.items.push(angular.copy(ticket));
                    this.fireChanges();
                };

                this.fireChanges = function () {
                    for (var i = 0; i < this.listeners.length; i++) {
                        this.listeners[i].call();
                    }
                };

                this.remove = function (ticket) {
                    for (var i = 0; i < this.items.length; i++) {
                        if (this.items[i] === ticket) {
                            this.items.splice(i, 1);
                            this.fireChanges();
                            return;
                        }
                    }
                };

                this.removeAll = function () {
                    this.items = [];
                    this.fireChanges();
                };

                this.size = function () {
                    return this.items.length;
                };

                this.getTickets = function () {
                    return this.items;
                };

                this.getOrderedTicketCollection = function () {
                    var orderedTicketCollection = [];
                    for (var i = 0; i < this.items.length; i++) {
                        var orderedTicket = {};
                        var ticket = {};
                        var category = {};
                        var supportingDocument = {};
                        category.id = this.items[i].category.id;
                        category.name = this.items[i].category.name;

                        ticket.id = this.items[i].id;
                        ticket.name = this.items[i].name;
                        ticket.price = this.items[i].price;
                        ticket.category = category;

                        supportingDocument.id = this.items[i].supportingDocument.id;
//                        supportingDocument.name = this.items[i].supportingDocument.name;

                        orderedTicket.ticket = ticket;
                        orderedTicket.firstName = this.items[i].firstName;
                        orderedTicket.lastName = this.items[i].lastName;
                        orderedTicket.middleName = this.items[i].middleName;
                        orderedTicket.dobString = this.items[i].dob;
                        orderedTicket.supportingDocumentData = this.items[i].supportingDocumentData;
                        orderedTicket.supportingDocument = supportingDocument;
                        orderedTicketCollection.push(orderedTicket);
                        

                    }
                    return orderedTicketCollection;
                }

                this.addListener = function (listener) {
                    this.listeners.push(listener);
                };

                this.getTotal = function () {
                    var total = 0;
                    for (var i = 0; i < this.items.length; i++) {
                        total += this.items[i].price;
                    }
                    return total.toFixed(2);
                };

            };
            return new shoppingCart();
        });
