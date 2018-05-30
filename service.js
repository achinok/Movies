"use strict";
{
    let service = function($http) {
      let vm = this;
      const APIKey = "c4b00959d2a2303480e492eec0ddb371";

      vm.data = {
        title: "Our group",
        genre: "Action",
        length: "2 hours"
      };

      vm.details = {};

      vm.getData = function() {
        return data;
      };

      vm.setData = function(newData){
        data = newData;
      };
      vm.searchMovies = function() {
        console.log('it made it here');
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
        $http.get(url).then(function(response) {
        console.log(response);
         
      })
      }
    };


    angular
		.module("app")
		.service("service", service);
}