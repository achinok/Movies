"use strict";
{
    let service = function($http, $location) {
      let vm = this;
      const APIKey = "c4b00959d2a2303480e492eec0ddb371";

      vm.movieData = [{
        id: 0,
        title: "Avengers: Infinity War",
        genre: "Action",
        date: 2010,
        length: "2 hours",
        overview: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
        img: `https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg`
      }];

      vm.details = {};


      vm.setData = function(newData){
        let movieEntry = {};
        for(let i=0; i<newData.length; i++){
          movieEntry = {
            id: i,
            title: newData.title,
            genre: newData.genre_ids,
            date: newData.release_date,
            length: newData.runtime,
            overview: newData.overview,
            img: `https://image.tmdb.org/t/p/w185/${newData.posterPath}`
          };
          vm.movieData.push(movieEntry);
        }
      };

      // TAKES IN FILTER INFO FROM SEARCH AND USES IN API CALL TO TMDB.org
      vm.search = function( genre, year, length) {
        console.log('it made it here');
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=batman`;
        // let url = `https://api.themoviedb.org/3/genre/${genreId}/movies?api_key=${APIKey}&language=en-US&include_adult=false&sort_by=created_at.asc`;

        $http.get(url).then(function(response) {
          // Sets data that will be displayed 
          vm.setData(response.data.results);
          console.log(response.data.results);
          $location.path("/movieList");         
        })
      }


      vm.userlist = [];
      vm.addToUserList = function(id) {
        vm.userlist.push(data.id);
      }
    };


    angular
		.module("app")
		.service("service", service);
}