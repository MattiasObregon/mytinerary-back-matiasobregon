//IMPORTS
import 'dotenv/config.js';                           //importo unicamente la configuracion de las variables de entorno  
import __dirname from './utils.js';                  //importo la configuracion de la ubicacion dle servidor (antes, con commonjs, venia con pre-configurada)
import createError from 'http-errors';               //crear errores
import express from 'express';                       //provee metodos y propiedades para levantar servidores
import path from 'path';                             //para conocer la ubicacion de nuestro servidor
import logger from 'morgan';                         //para registrar cada una de las peticiones

//var indexRouter = require('./routes/index');       //solo vamos a configurar las rutas del enrutador de back principal
import indexRouter from './routes/index.js'          //este enrutador va a llamar a TODOS los otros recursos

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

//ROUTER
app.use('/api', indexRouter);                          //obligo al servidor a que use las rutas del enrutador principal "/api"

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app
