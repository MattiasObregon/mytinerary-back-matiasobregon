import express  from "express"
import create from "../controllers/activities/create.js"
import update from "../controllers/activities/update.js"
import read from "../controllers/activities/read.js"
import destroy from "../controllers/activities/destroy.js"
import readOne from "../controllers/activities/readOne.js"

let activityRouter = express.Router();


activityRouter.post('/',create)

activityRouter.get('/',read)

activityRouter.get('/:_id',readOne)

activityRouter.put('/:a_id',update)

activityRouter.delete('/:id',destroy)

export default activityRouter