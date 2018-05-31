"use strict";
{

    let movies = {
        templateUrl: "movies.html",

        controller: function (service) {
            let vm = this;
            vm.movieData = service.movieData;

            vm.print = function(){
            	console.log(vm.movieData);
            }
            vm.moreDetails = function(id){
            	service.moreDetails(id);
            }
            vm.addToList = function(id) {
            	service.addToUserList(id);
            }
		}
	}

angular
.module("app")
.component("movies", movies)
}