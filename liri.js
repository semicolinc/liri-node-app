require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

const commands = (process.argv).splice(2);

//spotify command

if(commands[0] === "spotify-this-song" && commands[1] != null){
    var song = commands.slice(1, commands.length).join(" ");
} else {
    var song = "The Sign"; // by Ace of Base
};

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

