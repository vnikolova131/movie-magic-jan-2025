import { Router } from 'express' ;
import movieService from '../services/movie-service.js';
//import movies from '../movies.js'


const router = Router();

router.get('/', (req,res) => {
   // console.log(movies)
   const movies = movieService.getAll()
   
    res.render('home', { movies })
})

router.get('/about', (req,res) => {
    res.render('about')
})

export default router;

