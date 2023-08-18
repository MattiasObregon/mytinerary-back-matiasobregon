import User from '../../models/User.js'

export default async (req, res, next) => {
    try {
        let updateUser = await User.findByIdAndUpdate(
            req.params.u_id,
            req.body,
            { new: true }
        ).select('name photo mail')

        if (updateUser) {
            return res.status(200).json({
                success: true,
                message: 'User updated',
                response: updateUser
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'User not found',
                response: null
            });
        }
    } catch (error) {
        next(error);
    }
};