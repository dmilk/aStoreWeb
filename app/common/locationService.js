'use strict';

angular
        .module('aStore')
        .factory('LocationService', locationService);

locationService.$inject = ['$location'];

function locationService($location) {

    var referer = undefined;
    var service = {
        gotoBack: gotoBack,
        referer: referer
    };
    return service;

    function gotoBack() {
        $location.path(this.referer);
    }
}
;

