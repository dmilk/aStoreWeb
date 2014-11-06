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
        gotoHome: gotoHome,
        gotoOrderedTicket: gotoOrderedTicket,
        referer: referer
    };
    return service;

    function gotoBack() {
        if (!angular.isUndefined(this.referer)) {
            $location.path(this.referer);
        } else {
            $location.path('#');
        }
    }
    
    function gotoHome() {
        $location.path('#');
    }

    function savePath() {
        this.referer = $location.path();
    }
    
    function gotoOrderedTicket() {
        this.savePath();
        $location.path('app/orderedTicket');
    }
}
;

