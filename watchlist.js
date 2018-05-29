{
	let watchlist = {
		templateUrl: '',
		controller = function(service) {

		}
	}
	watchlist.$inject['service'];
    angular
	.module("app")
	.component("watchlist", watchlist);
}