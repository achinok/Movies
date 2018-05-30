"use strict";
{
    angular
    // .module("app", []);
        .module("app", ["ngRoute"])
        .config(($routeProvider) => {
			$routeProvider
			// .when("/home", {
			// 	template: ""
			// })
			.when("/movies", {
				template: "<movies></movies>"
			})
			.when("/watchList", {
				template: "<watch-list></watch-list>"
			})
			.when("/search", {
				template: "<search></search>"
			})
			.otherwise({ redirectTo: "/search" });
	});
}