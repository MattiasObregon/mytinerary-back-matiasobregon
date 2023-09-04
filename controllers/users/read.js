import User from "../../models/User.js"

export default async (req, res, next) => {
    try {
        let allUsers = await User
            .find()
            .sort({name:1})
        if (allUsers) {
            return res.status(200).json({
                sucess: true,
                message: 'Users foud',
                response: allUsers
            })
        } else {
            return res.status(404).json({
                sucess: false,
                message: 'Users not found',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
}