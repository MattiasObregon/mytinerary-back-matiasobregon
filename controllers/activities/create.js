import Activity from "../../models/Activity.js";

export default async (req, res, next) => {
  try {
    let newActvity = await Activity
    .create(req.body)
    return res.status(201).json({
      success: true,
      message: 'activity created',
      response: newActvity.id
    });
  } catch (error) {
    next(error)
  }
}