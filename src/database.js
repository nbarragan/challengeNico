//import {Low,JSONFile} from 'lowdb';
import { Low, JSONFileSync } from 'lowdb'

let db;
//let dbUsers;
//let dbFavMovies;
/*
export async function createCnn(){
    const UserAdapter = new JSONFile('users.json');
    const MovieAdapter = new JSONFile('favorites.json');
    dbUsers = new Low(UserAdapter);
    dbFavMovies = new Low(MovieAdapter);
    dbFavMovies.data = {movie : []};
    dbUsers.data = {user : []};
    //await db.write();
}*/
export function createCnn(){
    const adapter = new JSONFileSync('dbChallenge.json')
    .read.apply
    const db = new Low(adapter)

    db.data = ({ user: [], movies : [] }).write;
    //db.write();
}   
export const getConnection = () =>{
    return db;
};
/*
export const getConnectionUsers = () =>{
    return dbUsers;S
};

export const getConnectionMovies = () =>{
    return dbFavMovies;
};

*/