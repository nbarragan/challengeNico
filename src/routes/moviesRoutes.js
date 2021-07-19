import Router from 'express';
const router = Router();
import {validateToken} from '../tokens'
import {getMovies} from '../controllers/movies'

router.get('/movies',validateToken,getMovies);

export {router as moviesRouter};