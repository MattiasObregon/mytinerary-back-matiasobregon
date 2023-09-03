import Itinerary from "../../models/Itinerary.js"

export default async (req, res, next) => {
  try {
    let newCity = await City
      .create(req.body);

    if (newCity) {
      return res.status(201).json({
        success: true,
        message: 'City created',
        response: newCity._id
      })
    } else {
      return res.status(404).json({
        success: false,
        message: 'City not created',
        response: null
      })
    }
  } catch (error) {
    next(error)
  }
}