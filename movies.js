{

    let movies = {
        templateUrl: "movies.html",

        controller: function (service) {
            let vm = this;
            vm.movieData.title = service.movieData;
    


           
		}
	}

    angular
.module("app")
.component("movies", movies)
}
