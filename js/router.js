"use strict";
{
    angular
        .module("app")
        .config(($routeProvider) => {
			$routeProvider
			.when("/myList", {
				template: "<movies></movies>"
			})
			.when("/watchList", {
				template: "<watch-list></watch-list>"
			})
			.when("/search", {
				template: "<search></search>"
			})
			.when("/details", {
				template: "<details></details>"
			})
			.otherwise({ redirectTo: "/search" });
	});
}