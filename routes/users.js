import express from 'express';
import create from '../controllers/users/create.js'
import read from '../controllers/users/read.js'
import readOne from '../controllers/users/readOne.js'
import update from '../controllers/users/update.js'
import destroy from '../controllers/users/destroy.js'

let router = express.Router();

// Metodo http que: para crear es POST, para leer es GET, para actualizar es PUT/PATCH y para eliminar es DELETE
// Funcion que se va a ejecutar UNA UNICA VEZ cada vez que se llame el endpoint de manera que
// Cada vez que realizo una peticion POST, se creara un recurso
// Cada vez que realizo una peticion PUT/PATCH, se actualizaran recursos
// Cada vez que realizo una peticion DELETE, se eliminara un recurso

// Create
router.post('/', create)

// Read
router.get('/', read)
router.get('/:user_id', readOne)
// El nombre del parametro puede ser cualquiera
// Pero tanto aca en el enrutador, como en el controlador, los debo llamar de la misma forma
// Ejemolo: aca y en el controller id

// Update
router.put('/:u_id', update)

// Destroy
router.delete('/:id', destroy)

export default router