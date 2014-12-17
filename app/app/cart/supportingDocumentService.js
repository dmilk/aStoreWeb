'use strict';

angular
        .module('aStore')
        .factory('SupportingDocumentService', function ($resource, REST) {
            return $resource(REST.baseUrl + '/document',
                    {port: REST.port});
        });
