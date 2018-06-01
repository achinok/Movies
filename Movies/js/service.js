"use strict";
{
    // Utilized by each component in this project
    // Holds data and functions for sorting
    // Utilizes built in angular services
    // - $http for API request
    // - $location for routing between different component views
    let service = function($http, $location) {
      let vm = this;
      // For TMDB - registered under Kelly Achino's account
      const APIKey = "c4b00959d2a2303480e492eec0ddb371";

      // Array Containing Movie Data Objects, starts off with one intial placeholder template
      // set Data fxn changes
      // Is called on in movies, watcList, and more components
      vm.movieData = [{
        id: 0,
        title: "Avengers: Infinity War",
        genre: "Action",
        date: 2018,
        length: "2 hours",
        overview: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
        img: `https://image.tmdb.org/t/p/w300/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg`,
        saved: false
      }];


      // Object to hold Data that will be updated and used when More button is clicked
      // on movie or watch list pages
      vm.details = {};


      // Function is called after TMDB api returns a successful responsee
      // 1. Resets movieData object to empty to await new content
      // 2. Loops through API response, pulls out and stores the data that is needed
      // 3. Pushes each movie entry into movieData array
      vm.setData = function(newData){
        vm.movieData = [];
        let movieEntry = {};
        for(let i=0; i<newData.length; i++){
          let movie = newData[i];
          console.log(movie);
          movieEntry = {
            id: i,
            title: movie.title,
            genre: movie.genre_ids,
            date: movie.release_date.slice(0,4),
            length: movie.runtime,
            overview: movie.overview,
            img: `https://image.tmdb.org/t/p/w185/${movie.poster_path}`,
            saved: false
          };
          vm.movieData.push(movieEntry);
        }
      };


      // Called in search component. Takes in filter options and makes API request to TMDB
      // Checks to make sure search parameters have value if none, sets to default
      // Calls setData upon successful response and updates movieData
      vm.search = function(genre, year, length) {

        //let url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=batman`;
        let url = `https://api.themoviedb.org/3/discover/movie?with_runtime.lte=${length}&year=2010&with_genres=${genre}&primary_release_year=${year}&page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=${APIKey}`;

        $http.get(url).then(function(response) {
          // Sets data that wil be displayed 
          vm.setData(response.data.results);

          // Route to movie list
          $location.path("/myList");         
        })
      }

      // Initialize Empty Array to store movies that user saves
      vm.userlist = [];

      // When user clicks on save button this stores that movie's data from movieData array 
      // into the selected user List array so it can be displayed on the watchList view
      // Called in movies component
      // 1. current stores next index value in array to store the incoming movie data object
      // 2. switches .saved on movieData array entry so button disappears
      // 3. pushes data to userlist array to display in watch list view
      // 4. Sets id for just stored movie data to the proper array index value
      vm.addToUserList = function(id) {
        let current = vm.userlist.length;
        vm.movieData[id].saved = true;
        vm.userlist.push(vm.movieData[id]);
        vm.userlist[current].id = current; 
      }

      // Removes movie from userList given array index
      // Loops through array and updates id to correspond to index position
      vm.removeFromUserList = function(id) {
        console.log(id);
        vm.userlist.splice(id, 1);
        console.log(vm.userlist);

        for(let i = 0; i<vm.userlist.length; i++){
          vm.userlist[i].id = i;
        }
      }

      // Used to reaccess movie data  and display more information when the more button 
      // is clicked on either the movie or watch list
      // uses parameter watch as boolean to differentiate between which page the more button was clicked on
      // important because movie data is stored in two separate arrays
      // Then routes to more details view page component
      vm.moreDetails = function(watch, id) {
        console.log(watch);
        if(watch){
          console.log(id);
          vm.details = vm.userlist[id];
        }
        else{
          vm.details = vm.movieData[id];
        }
        $location.path("/more");
      }
    };


    angular
		.module("app")
		.service("service", service);
}