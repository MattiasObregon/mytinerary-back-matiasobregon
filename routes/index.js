import express from 'express';
//importador principal va a llamar a TODOS los recursos y los va a enrutar
import userRouter from './users.js'

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//obligo al enrutador principal a usar las rutas del enrutardor del recurso user
router.use('/users',userRouter)
//router.user acepta COMO MINIMO DOS PARAMETROS para poder enrutar correctamente
  //1- la palabrita con la que se va a enrutar
  //2- el enrutador que tengo que conectar

export default router