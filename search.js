{
    let search = {
        templateUrl: "search.html",

        controller: function (service) {
            let vm = this;

            vm.filter = {
                year: "",
                genre: "",
                length: ""

            }
            vm.update = function () {
                service.filter(vm.filter);
            }
        }
    }


    search.$inject = ["service"];



    angular
        .module("app")
        .component("search", search)
}