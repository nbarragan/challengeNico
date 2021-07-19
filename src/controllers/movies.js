
import Router from 'express';
const router = Router();
import fetch from 'node-fetch';
import jwt from 'jsonwebtoken';


const privateKey = 'secret_token_CdS';


const tmdbUrl = "https://api.themoviedb.org/3/movie/550?api_key=";
const key = "e790cbe59dc36362794e64a7744deca0";

export const getMovies = async(req,res) =>{
    
    const response = await fetch(tmdbUrl + key);
    const movies = await response.json();
    res.json(movies);
};

function randomNumber(){
        let numRandom = Math.floor(Math.random() * (0 - 100) + min);
        return numRandom;
}