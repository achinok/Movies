{

 

	let watchList = {
		templateUrl: "watchlist.html",
		controller: function(service) {

		}
	}
	watchList.$inject = ['service'];
    angular
	.module("app")
	.component("watchList", watchList);
}