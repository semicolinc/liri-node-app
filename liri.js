require("dotenv").config();
const commands = (process.argv).splice(2);
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");

if(commands[0] === "spotify-this-song" && commands[1] != null){
    var song = commands.slice(1, commands.length).join(" ");
    spotifySong(song);
} else if (commands[0] === "spotify-this-song" && commands[1] == null){
    var song = "The Sign"; // by Ace of Base
    spotifySong(song);
};

if(commands[0] === "concert-this" && commands[1] != null) {
    var artist = commands.slice(1, commands.length).join("+");
    concertThis(artist);
} else if(commands[0] === "concert-this" && commands[1] == null){
    var artist = "Taylor Swift";
    concertThis(artist);
}

if(commands[0] === "movie-this" && commands[1] != null) {
    var movie = commands.slice(1, commands.length).join("+");
    movieThis(movie);
} else if(commands[0] === "movie-this" && commands[1] == null){
    var movie = "Mr. Nobody";
    movieThis(movie);
}

if(commands[0] === "do-what-it-says") {
    doIt();
}


//spotify command

function spotifySong(song){
    spotify
        .search({ type: 'track', query: song, limit: 3})
        .then(function(response) {
            response.tracks.items.forEach(function (data) {
                // console.log(data);
                console.log("\n---------------");
                console.log("\nArtists: " + data.album.artists[0].name);
                console.log("Song Name: " + data.name);
                console.log("Spotify Preview: " + data.preview_url);
                console.log("Album: " + data.album.name);
            })
        })
        .catch(function(err) {
            console.log(err);
            console.log("error found")
        });
}

//concert-this command

function concertThis(artist){
    let url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
        
    axios
        .get(url)
        .then(function(response) {
            console.log("\n---------------------");
            console.log("\nArtist: " + artist.split("+").join(" "));
            console.log("Venue: " + response.data[0].venue.name);
            console.log("Location: " + response.data[0].venue.city + ", " + response.data[0].venue.country);
            console.log("Date: " + moment(response.data[0].datetime).format("MM/DD/YYYY"));
        })
        .catch(function (err) {
            console.log(err);
        })
}

//get-movie command

function movieThis(movie){
    let url = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    axios
        .get(url)
        .then(function (response) {
            console.log("\n-----------------------")
            console.log("\nTitle: " + response.data.Title);
            console.log("Year Released: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.Ratings[0].Value);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Produced In: " + response.data.Country);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        })
        .catch(function (err) {
            console.log(err);
        });
}

//do it command

function doIt (){
    fs.readFile("random.txt", "utf-8", function(error, data){
        if (error) {
            return console.log(error);
        }
        var input = data.split(","); 
        if (input[0] === "spotify-this-song") {
            var song = input[1];
            spotifySong(song);
        } else if (input[0] === "concert-this"){
            var artist = input[1];
            concertThis(artist);
        } else if (input[0] === "movie-this") {
            var movie = input[1];
            movieThis(movie);
        } else {
            console.log("command does not exist!");
        }
    })
}