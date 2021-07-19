import express from 'express';
const app = express();
import morgan from 'morgan';
import {createCnn} from './database';

createCnn();

//settings
app.set('port',process.env.PORT || 3000); // en caso de que exista un puerto definido en mi sistema o en el servicio de la nube, que use ese
// en caso de que  no exista, que utilice el puerto 3000
app.set('json spaces',2); // formato del json que se ve en la pagina



//middlewares
app.use(morgan('dev')); //ejecutar morgan / permite ver por consola lo que va llegando al servidor / cada parametro es un tipo distinto
app.use(express.urlencoded()); // recibe datos de input
app.use(express.json());// especifico que formato recibe y envia el servidor 

import {userRouter} from './routes/userRoutes'
import {moviesRouter} from './routes/moviesRoutes'
//routes
app.use('/api', userRouter);// app utiliza lo que requiero de la carpeta routes las rutas del controlador user
app.use('/api', moviesRouter);

app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`);
});
