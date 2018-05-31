"use strict";
{
	let more = {
		templateUrl: "more.html",

		controller: function(service) {
			let vm = this;
			vm.movieSpec = service.details;
		}

	};

	more.$inject = ["service"];

	angular
	.module("app")
	.component("more", more);
}