"use strict";
{
    angular
    // .module("app", []);
        .module("app", ["ngRoute"])
        .config(($routeProvider) => {
			$routeProvider
			.when("/home", {
				template: ""
			})
			.when("/movieList", {
				template: "<movie-list></movie-list>"
			})
			.when("/watchList", {
				template: "<watch-list></watch-list>"
			})
			.when("/search", {
				template: "<search></search>"
			})
			.otherwise({ redirectTo: "/home" });
	});
}