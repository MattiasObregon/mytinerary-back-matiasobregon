//IMPORTS
import 'dotenv/config.js';                           //importo unicamente la configuracion de las variables de entorno  
import __dirname from './utils.js';                  //importo la configuracion de la ubicacion dle servidor (antes, con commonjs, venia con pre-configurada)
import express from 'express';                       //provee metodos y propiedades para levantar servidores
import path from 'path';                             //para conocer la ubicacion de nuestro servidor
import logger from 'morgan';                         //para registrar cada una de las peticiones
import errorHandler from './middlewares/notFoundHandler.js'
import indexRouter from './routes/index.js'          //este enrutador va a llamar a TODOS los otros recursos
import notFoundHandler from './middlewares/notFoundHandler.js';
import cors from 'cors'

let app = express();                                 //ejecutando el modulo de express: CREO UNA APP DE BACKEND

//VIEW ENGINE SETUP
// view engine setup
//SET es el metodo necesario para SETear (configurar) algo (motor de plantillas  de vistas de EJS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// MIDDLEWARES
//USE es el metodo necesario para obligar a mi aplicacion a que use la funcion CADA VEZ que se realiza una SOLICITUD
app.use(logger('dev'));                             //obligo al servidor a registrar una peticion con el modulo de logger
app.use(express.json());                            //obligo al servidor a manipular/leer json
app.use(express.urlencoded({ extended: false }));   //obligo al servidor a leer params/queries
app.use(express.static(path.join(__dirname, 'public'))); //obligo al servidor a acceder los archivos estaticos de la carpeta public
app.use(cors());

//ROUTER
app.use('/api', indexRouter);                          //obligo al servidor a que use las rutas del enrutador principal "/api"

// catch 404 and forward to error handler
app.use(notFoundHandler);

// error handler
app.use(errorHandler);

export default app