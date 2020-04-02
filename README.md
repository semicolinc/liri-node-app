# liri-node-app
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

Requirements

You will need to have the following installed:
dotenv
node-spotify-api (requires own key)
axios
moment
fs

Commands

There are 4 available commands that you can use with this program:
The basic format is node liri.js {command} {parameter}

1) concert-this
Obtain the details of the next concert of a specified artist. Type: node liri.js concert-this {artist}
2) spotify-this-song
Obtain the details of the artist of a specified song. Type: node liri.js spotify-this-song {song}
3) movie-this
Obtain the details of a specified movie. Type: node liri.js movie-this {movie}