"use strict";
{
    angular
        .module("app", ["ngRoute"])
        .config(($routeProvider) => {
			$routeProvider
			.when("/home", {
				template: ""
			})
			.when("/movieList", {
				template: "<movie-list></movielist>"
			})
			.when("/watchList", {
				template: "<watch-list></watch-list>"
			})
			.otherwise({ redirectTo: "/home" });
	});
}