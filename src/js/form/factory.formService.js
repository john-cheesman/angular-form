(function() {
    'use strict';

    angular
        .module('form')
        .factory('formService', formService);

    function formService() {
        return {
            formData: {}
        };
    }
})();
