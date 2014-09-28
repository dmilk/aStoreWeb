var aStoreService = angular.module('aStore.services', ['ngResource']);

aStoreService.factory('Route', function ($resource) {
    return $resource('http://localhost\::port/aStore/rest/route',
            {port: 8080}, {findAll: {method: 'GET', isArray: true}});
});


aStoreService.factory('Category', function ($resource) {
    return $resource('http://localhost\::port/aStore/rest/category',
            {port: 8080}, {findAll: {method: 'GET', isArray: true}});
});

aStoreService.factory('Ticket', function($resource){
  return $resource('http://localhost\::port/aStore/rest/ticket/:categoryId', 
            {categoryId:'@categoryId', port:8080}, {findByCategory: {method: 'GET', isArray: true}});
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

//aStoreService.factory('Cart', function () {
//    return { routeText: 'Empty_route' };
//});

aStoreService.factory('Cart', function(){
    var shoppingCart = function () {
        this.routeId = 0;
        this.items = [];
        this.listeners = [];
        this.add = function(ticket) {
            this.items.push(ticket);
            this.fireChanges();
        }
        this.fireChanges = function() {
            for (var i = 0; i < this.listeners.length; i++) {
                this.listeners[i].call();
            }
        }
        this.remove = function(ticket) {
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i] === ticket) {
                    this.items.splice(i,1);
                    this.fireChanges();
                    return;
                }
            }
        }
        this.removeAll = function() {
            this.items = [];
            this.fireChanges();
        }
        this.size = function() {
            return this.items.length;
        }
        this.getTickets = function() {
            return this.items;
        }
        this.addListener = function(listener) {
            this.listeners.push( listener);
        }
        this.getTotal = function() {
            var total = 0;
            for (var i = 0; i < this.items.length; i++) {
                total += this.items[i].price;
            }
            return total.toFixed(2);
        }

    };
    return new shoppingCart();
});