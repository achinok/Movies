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