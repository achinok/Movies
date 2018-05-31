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
            vm.update = function() {
                console.log("button works");
                service.search();
            };
        }
    }


    search.$inject = ["service"];



    angular
        .module("app")
        .component("search", search)
}