import { model, Schema, Types } from 'mongoose'

let collection = 'itineraries'
let schmea = new Schema({
    name: { type: String, required: true },
    city_id: { type: Types.ObjectId, ref: 'cities', required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    tags: { type: Array, required: true },
    photo: { type: String, required: true }
}, {
    timestamps: true
})

let Itinerary = model(collection, schmea)
export default Itinerary