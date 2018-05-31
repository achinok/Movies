{
    let search = {
        templateUrl: "search.html",

        controller: function (service) {
            let vm = this;

            vm.filter = {
                year: "",
                length: "",  
                genre = new Genre([[12, "Adventure"], [35, "Comedy"], [10749, "Romance"], [14, "Fantasy"]]),       
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