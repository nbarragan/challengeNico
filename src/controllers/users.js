
import fs from 'fs';
import _ from 'underscore';
//const json_users = fs.readFileSync('./src/users.json','utf-8');
//const users = JSON.parse(json_users);
import jwt from 'jsonwebtoken';
import {createNewToken} from '../tokens';
import {getConnection} from '../database';

const privateKey = 'secret_token_CdS';
/*
const getUsers = async(req,res) =>{
    res.json(user);
}*/
 
export const login = async (req,res) =>{
    const {email,password} = req.body;
    
    if(email && password){
        
        _.each(users,(user,i) => {
            if(user.email == email){
                res.status(400).json({error : 'The user already exists'});
                return;
            }
            //error aca,. agrega de nuevo un usuario, no puedo usar foreach, voy a usar .find de lowdb
        });         

        const token = createNewToken(id);
        
        res.json({token});
    }else{
        res.status(500).json({error:'An error has ocurred'});
    };
    
}

export const register = async(req,res) => {
    const {email,firstName,lastName,password} = req.body;
    
    if(email && firstName && lastName && password){
        //const id = users.length + 1;
        //const id = getConnection().get('user').length + 1;
        const id = 1;
        const newUser = { id,...req.body };
        //let existsUser = false;
        console.log(newUser);

        const existsUser = await getConnection().get('usser').find({email : req.body.email}).value();

        if(!existsUser){
            getConnection().get('user').push(newUser).write();
        }else{
            res.status(500).json({error:'The user already exists'});
        };
    }
}
