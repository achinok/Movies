{
	let watchList = {
		templateUrl: '',
		controller: function(service) {

		}
	}
	watchList.$inject = ['service'];
    angular
	.module("app")
	.component("watchList", watchList);
}