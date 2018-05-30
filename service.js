
{
    let service = function($http) {
      let APIKey = "c4b00959d2a2303480e492eec0ddb371";

      let data = {
        title: "Our group",
        genre: "Action",
        length: "2 hours"
      };

      let details = {};

      const getData = function() {
        return data;
      };

      const setData = function(newData){
        data = newData;
      };
      const searchMovies = function() {
        console.log('it made it here');
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

      return $http.get(url).then(function(response) {
        console.log(response);
        // this callback will be called asynchronously
        // when the response is available
         
      })
      }
    };

service.$inject = [$http];

    angular
		.module("app")
		.service("service", service);
}