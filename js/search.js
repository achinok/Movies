{
    let search = {
        templateUrl: "search.html",

        controller: function (service) {
          let vm = this;

            vm.filter = {
                year: "",
                // length: ""
                // genre = new Map([[12, "Adventure"], [35, "Comedy"], [10749, "Romance"], [14, "Fantasy"]]),                    
            }


            vm.pickGenre = function() {
                
            }
            // vm.print = function(){
            //  console.log(vm.);
            // }
            vm.update = function () {
                service.filter(vm.filter);
            },
            vm.genre = [
              {id: 12, name: "Adventure"},
              {id: 32, name: "Comedy"},
              {id: 10749, name: "Romance"},
              {id: 14, name: "Fantasy"}
            ]
          }
        }


    search.$inject = ["service"];



    angular
        .module("app")
        .component("search", search)
}