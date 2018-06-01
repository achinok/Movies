{
    let search = {
        templateUrl: "search.html",

        controller: function (service) {
          let vm = this;

            vm.filter = {
                year: "",
                genre: "",
                length: ""

            },
            vm.print = function(){
             console.log(vm.filter.year);
             console.log(vm.filter.genre);
             console.log(vm.filter.length);
            },
            vm.update = function() {
                service.search(vm.filter.genre, vm.filter.year, vm.filter.length);
            },
            vm.genre = [
              {id: 12, name: "Adventure"},
              {id: 35, name: "Comedy"},
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