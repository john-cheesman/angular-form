(function() {
    'use strict';

    angular
        .module('form')
        .controller('formController', formController);

    formController.$inject = ['formService'];

    function formController(formService) {
        var vm;

        vm = this;

        vm.data          = {};
        vm.submit        = submitIfValid;
        vm.formSubmitted = false;

        function submitIfValid(valid) {
            if (valid) {
                formService.formData = vm.data;
            }
            else {
                vm.formSubmitted = true;
            }
        }
    }
})();
