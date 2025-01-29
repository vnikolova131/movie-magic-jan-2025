import { Router } from 'express' ;
import movieService from "../services/movie-service.js"

const movieController = Router();

movieController.get('/search', async (req,res) => {
    const filter = req.query;
    const movies = await movieService.getAll(filter)

    res.render('search', { movies, filter });
})
//import movies from '../movies.js';
//import findOne from "../services/movie-service.js"

movieController.get('/create', (req,res) => {
    res.render('create');
})

movieController.post('/create', async (req,res) => {
    const newMovie = req.body;

    await movieService.create(newMovie)
    res.redirect('/')
})



movieController.get('/:movieId/details', async (req, res) => {

    const movieId = req.params.movieId;
    const movie = await movieService.findOne(movieId)
    //movie.rating
    res.render('details', { movie })
})


export default movieController;
