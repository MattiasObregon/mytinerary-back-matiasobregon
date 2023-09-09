import { model, Schema, Types } from 'mongoose';

const collection = 'activities';

const schema = new Schema(
  {
    name: { type: String, required: true },
    photo: { type: String, required: true },
    itinerary_id: { type: Types.ObjectId, required: true, ref: 'itineraries' },
  },
  {
    timestamps: true,
  }
);

const Activity = model(collection, schema);

export default Activity;