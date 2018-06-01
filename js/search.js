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


<<<<<<< HEAD
            vm.pickGenre = function() {
                
            }
=======
            },
>>>>>>> 66c0aa2ebe0abe54483e49bd23736f734d89dba4
            // vm.print = function(){
            //  console.log(vm.);
            // }
            vm.update = function () {
                service.search();
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