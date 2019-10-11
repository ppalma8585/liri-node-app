require("dotenv").config();
var keys = require("./keys")
var Spotify = require("node-spotify-api")
var axios = require("axios")


var whatLiriDoes = process.argv[2]
var whatLiriLooksUp = process.argv[3]



var keys = require("./keys.js");

if (whatLiriDoes == 'spotify-this-song') {
    console.log('song')

    var spotify = new Spotify(keys.spotify);
     
    spotify.search({ type: 'track', query: whatLiriLooksUp }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
     
    console.log(data.tracks.items[0]); 
    console.log(data.tracks.items[0].name);
    console.log(data.tracks.items[0].album.name);
    console.log(data.tracks.items[0].external_urls);
    console.log(data.tracks.items[0].artists[0].name); 
    });
}

else if (whatLiriDoes == "movie-this") {
    console.log("movie")

    
var queryUrl = "http://www.omdbapi.com/?t=" + whatLiriLooksUp + "&y=&plot=short&apikey=trilogy";



axios.get(queryUrl).then(

    function(response) {
  
      
      console.log('title: ' + response.data.Title);
      console.log('plot: ' + response.data.Plot);
      console.log('Rated: ' + response.data.Rated);
      console.log('Date: ' + response.data.Released);
      console.log(response.data.Country);
      console.log('Cast: ' + response.data.Actors);
      console.log(response.data.Language);
  
    })
  
    .catch(function(error) {
  
      if (error.response) {
  
        // The request was made and the server responded with a status code
  
        // that falls out of the range of 2xx
  
        console.log("---------------Data---------------");
  
        console.log(error.response.data);
  
        console.log("---------------Status---------------");
  
        console.log(error.response.status);
  
        console.log("---------------Status---------------");
  
        console.log(error.response.headers);
  
      } else if (error.request) {
  
        // The request was made but no response was received
  
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
  
        console.log(error.request);
  
      } else {
  
        // Something happened in setting up the request that triggered an Error
  
        console.log("Error", error.message);
  
      }
  
      console.log(error.config);
  
    });

}

else if (whatLiriDoes == "concert-this") {
    console.log("concert")
    // Then run a request with axios to the OMDB API with the movie specified

var queryUrl = "https://rest.bandsintown.com/artists/" + whatLiriLooksUp + "/events?app_id=codingbootcamp";



axios.get(queryUrl).then(

    function(response) {
        for (i=0; i<response.data.length; i++) {
            console.log('New Event'
            )
            console.log('Country: ' + response.data[i].venue.country)
            console.log('city: ' + response.data[i].venue.city)
            console.log('name:' + response.data[i].venue.name)
            console.log('Date:' + response.data[i].datetime)
        }
  
    })
  
    .catch(function(error) {
  
      if (error.response) {
  
        // The request was made and the server responded with a status code
  
        // that falls out of the range of 2xx
  
        console.log("---------------Data---------------");
  
        console.log(error.response.data);
  
        console.log("---------------Status---------------");
  
        console.log(error.response.status);
  
        console.log("---------------Status---------------");
  
        console.log(error.response.headers);
  
      } else if (error.request) {
  
        // The request was made but no response was received
  
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
  
        console.log(error.request);
  
      } else {
  
        // Something happened in setting up the request that triggered an Error
  
        console.log("Error", error.message);
  
      }
  
      console.log(error.config);
  
    });
}

else if (whatLiriDoes == "do-what-it-says") {
    console.log("whatever")
}