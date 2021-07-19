import Router from 'express';
const router = Router();
import {validateToken} from '../tokens'
import {getMovies} from '../controllers/movies'

router.get('/movies',getMovies);

export {router as moviesRouter};