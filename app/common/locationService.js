'use strict';

angular
        .module('aStore')
        .factory('LocationService', locationService);

locationService.$inject = ['$location'];

function locationService($location) {

    var referer = undefined;
    var service = {
        savePath: savePath,
        gotoBack: gotoBack,
        referer: referer
    };
    return service;

    function gotoBack() {
        if (!angular.isUndefined(referer)) {
            $location.path(this.referer);
        } else {
            $location.path('#');
        }
    }

    function savePath() {
        this.referer = $location.path();
    }
}
;

