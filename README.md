# liri-node-app
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

<h3>Requirements</h3>

You will need to have the following installed:<br/>
dotenv - https://www.npmjs.com/package/dotenv <br/>
node-spotify-api (requires own key) - https://www.npmjs.com/package/node-spotify-api <br/>
axios - https://www.npmjs.com/package/axios <br/>
moment - https://www.npmjs.com/package/moment <br/>
fs - https://www.npmjs.com/package/fs <br/>

<h3>App</h3>

This app is run through the terminal using node. I made this project to start testing out the use of node and various apis. I am using the following APIs:

1) Bands in Town API - https://www.artists.bandsintown.com/support/api-installation <br>
2) Spotify API - https://developer.spotify.com/documentation/web-api/ <br>
3) OMDB API - http://www.omdbapi.com/ <br>

You can see a deeper runthrough of the app through this link: https://drive.google.com/file/d/16_IE2_yUONdKqH81XwNuiJpWnym_h2xq/view<br/>

<h3>Commands</h3>

There are 4 available commands that you can use with this program:<br/>
The basic format is node liri.js {command} {parameter}

1) concert-this <br/>
Obtain the details of the next concert of a specified artist. Type: node liri.js concert-this {artist}
2) spotify-this-song <br/>
Obtain the details of the artist of a specified song. Type: node liri.js spotify-this-song {song}
3) movie-this <br/>
Obtain the details of a specified movie. Type: node liri.js movie-this {movie}
4) do-what-it-says <br/>
In the text file called random.txt, type in using one of the 3 commands above and the specified parameter, separated by a comma without a space.
It will run that command. Type: node liri.js do-what-it-says
