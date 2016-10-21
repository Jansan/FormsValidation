angular.module("mainModule")
    .component("validatedInput", {
        templateUrl: "Scripts/Components/ValidatedInput/ValidatedInput.html",
        controller: function () {
            var ctrl = this;

            ctrl.setValid = function (isValid) {
                console.log(isValid);
            }
        },
        binding: {
            type: "<",
            id: "<",
            lable: "<",
            model: "=",
            isValid: "="

        }
    });