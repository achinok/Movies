"use strict";
{

    let movies = {
        templateUrl: "movies.html",

        controller: function (service) {
            let vm = this;
            vm.movieData = service.movieData;

            // vm.print = function(){
            // 	console.log(vm.movieData);
            // }

            vm.moreDetails = function(watch, id){
            	service.moreDetails(watch, id);
            }
            vm.addItem = function(id) {
            	service.addToUserList(id);
            }

            vm.addImg = function(id){
                
            }

		}
	};

    movies.$inject = ["service"];

    angular
    .module("app")
    .component("movies", movies)
}