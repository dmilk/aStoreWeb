(function () {
    'use strict';

    angular
            .module('aStore')
            .constant('REST', {
                'port': 8080,
                'baseUrl': 'http://localhost\::port/aStore/rest',
                'fullUrl': 'http://localhost:8080/aStore/rest'
            })
            .constant('moment', '1moment');
})();