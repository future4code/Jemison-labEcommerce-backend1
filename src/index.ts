import app from "./app";
import getAllCharacters from "./endpoints/Characters/getAllCharacters";
import getAllMovies from "./endpoints/Movies/getAllMovies";
import getCharactersByMovie from "./endpoints/Characters/getCharactersByMovie";
import getMovieCharacters from "./endpoints/Movies/getMovieCharacters";
import createCharacters from "./endpoints/Characters/createCharacters";
import createMovies from "./endpoints/Movies/createMovies";
import deleteCharacters from "./endpoints/Characters/deleteCharacters";
import deleteMovies from "./endpoints/Movies/deleteMovies";

app.get('/character', getAllCharacters)

app.get('/movie', getAllMovies)

app.get('/movie/:id/characters', getCharactersByMovie)

app.get('/character/:id/movies', getMovieCharacters)

app.put('/character', createCharacters)

app.put('/movie', createMovies)

app.delete('/character/:id', deleteCharacters)

app.delete('/movie/:id', deleteMovies)