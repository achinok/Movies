{
    let search = {
        templateUrl: "search.html",

        controller: function (service, $location) {
            let vm = this;

            vm.filter = {
                year: "",
                // length: ""
                // genre = new Map([[12, "Adventure"], [35, "Comedy"], [10749, "Romance"], [14, "Fantasy"]]),                    
            }


            vm.pickGenre = function() {
                
            }

            vm.update = function() {
                console.log("button works");
                service.search();

            };
        }
    }


    search.$inject = ["service", "$location"];



    angular
        .module("app")
        .component("search", search)
}