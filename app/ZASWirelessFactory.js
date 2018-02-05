(function() {
    'use strict';

    angular
        .module('app')
        .factory('ZASWirelessFactory', ZASWirelessFactory);

    ZASWirelessFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function ZASWirelessFactory($http, $q) {
        var service = {};
        return service;
    }
})();