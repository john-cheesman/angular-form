(function() {
    'use strict';

    angular
        .module('form')
        .controller('resultsController', resultsController);

    resultsController.$inject = ['formService'];

    function resultsController(formService) {
        var vm;

        vm = this;

        vm.form = formService;
    }
})();
