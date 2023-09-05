import express from 'express'
import read from '../controllers/itineraries/read.js'
import update from '../controllers/itineraries/update.js'
import destroy from '../controllers/itineraries/destroy.js'
import create from '../controllers/itineraries/create.js'
import readOne from '../controllers/itineraries/readOne.js'

let itinerariesRouter = express.Router();

// Create
itinerariesRouter.post('/', create);

// Read
itinerariesRouter.get('/', read);
itinerariesRouter.get('/:_id',readOne)

// Update
itinerariesRouter.put('/:id', update);


// Destroy
itinerariesRouter.delete('/:id', destroy)

export default itinerariesRouter;