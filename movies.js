{

    let movies = {
        templateUrl: "movies.html",

        controller: function (service) {
            let vm = this;
            vm.movieData = service.movieData;
           
		}
	}

    angular
.module("app")
.component("movies", movies)
}
