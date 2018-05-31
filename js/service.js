"use strict";
{
    let service = function($http, $location) {
      let vm = this;
      const APIKey = "c4b00959d2a2303480e492eec0ddb371";

      // Array Containing Movie Data Objects, starts off with one intial placeholder template
      vm.movieData = [{
        id: 0,
        title: "Avengers: Infinity War",
        genre: "Action",
        date: 2018,
        length: "2 hours",
        overview: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
        img: `https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg`
      }];


      // Object to hold Data that will be updated and used when MoreDetails is chosen
      vm.details = {};


      vm.setData = function(newData){
        console.log(newData);
        let movieEntry = {};
        for(let i=0; i<newData.length; i++){
          let movie = newData[i];
          movieEntry = {
            id: i,
            title: movie.title,
            genre: movie.genre_ids,
            date: movie.release_date.slice(0,4),
            length: movie.runtime,
            overview: movie.overview,
            img: `https://image.tmdb.org/t/p/w185/${movie.posterPath}`
          };
          vm.movieData.push(movieEntry);
        }
      };

      // TAKES IN FILTER INFO FROM SEARCH AND USES IN API CALL TO TMDB.org
      vm.search = function( genre, year, length) {
        console.log('it made it here');
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=batman`;
        // let url = `https://api.themoviedb.org/3/discover/movie?with_runtime.lte=${length}&year=2010&with_genres=${genre}&primary_release_year=${year}&page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=${APIKey}`;

        $http.get(url).then(function(response) {
          // Sets data that will be displayed 
          vm.setData(response.data.results);

          $location.path("/myList");         
        })
      }


      vm.userlist = [];
      vm.addToUserList = function(id) {
        vm.userlist.push(data.id);
      }
      vm.moreDetails = function(watch, id) {
        if(watch){
          vm.details = vm.userList[id];
        }
        else{
          vm.details = vm.movieData[id];
        }
        $location.path("/details");
      }
    };


    angular
		.module("app")
		.service("service", service);
}