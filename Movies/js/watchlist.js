"use strict";
{

	let watchList = {
		templateUrl: "watchlist.html",
		
		controller: function (service) {
            let vm = this;
            vm.movieData = service.userlist;

            // vm.print = function(){
            // 	console.log(vm.movieData);
            // }
            vm.moreDetails = function(watch, id){
            	service.moreDetails(watch, id);
            }
            vm.removeItem = function(id) {
            	service.removeFromUserList(id);
            }           
		}
	};

	watchList.$inject = ["service"];

    angular
	.module("app")
	.component("watchList", watchList);
}