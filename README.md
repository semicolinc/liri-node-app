# liri-node-app
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

Requirements

You will need to have the following installed:
dotenv - https://www.npmjs.com/package/dotenv
node-spotify-api (requires own key) - https://www.npmjs.com/package/node-spotify-api
axios - https://www.npmjs.com/package/axios
moment - https://www.npmjs.com/package/moment
fs - https://www.npmjs.com/package/fs

Commands

There are 4 available commands that you can use with this program:
The basic format is node liri.js {command} {parameter}

1) concert-this -
Obtain the details of the next concert of a specified artist. Type: node liri.js concert-this {artist}
2) spotify-this-song - 
Obtain the details of the artist of a specified song. Type: node liri.js spotify-this-song {song}
3) movie-this - 
Obtain the details of a specified movie. Type: node liri.js movie-this {movie}
4) do-what-it-says - 
In the text file called random.txt, type in using one of the 3 commands above and the specified parameter, separated by a comma without a space.
It will run that command. Type: node liri.js do-what-it-says
