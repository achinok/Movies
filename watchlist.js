{

 

	let watchList = {
		templateUrl: "watchlist.html",
		controller: function(service) {
			let vm = this;
			vm.donkey = function() {
				console.log("button works");
				// service.searchMovies();
			}

		}
	};
	watchList.$inject = ["service"];
    angular
	.module("app")
	.component("watchList", watchList);
}