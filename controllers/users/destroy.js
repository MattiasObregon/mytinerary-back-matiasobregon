import User from "../../models/User.js"

export default async (req, res, next) => {
    try {
        let deleteUser = await User
            .findByIdAndDelete(req.params.id)

        if (deleteUser) {
            return res.status(200).json({
                sucess: true,
                message: 'User deleted',
                response: deleteUser._id
            })
        } else {
            return res.status(404).json({
                sucess: false,
                message: 'User not deleted',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
}