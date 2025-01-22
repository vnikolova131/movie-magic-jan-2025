import { Router } from 'express' ;


const movieController = Router();

movieController.get('/create', (req,res) => {
    res.render('create');
})

movieController.post('/create', (req,res) => {
    const newMovie = req.body;

    //console.log(req.body)
    res.end()
})

movieController.get('/:movieId/details', (req, res) => {

    const movieId = req.params.movieId;
    res.render('details')
})


export default movieController;
