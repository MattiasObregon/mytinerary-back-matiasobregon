import Activity from "../../models/Activity.js";

export default async(req, res)=>{
    try{
        let allActivities = await Activity.find()
        return res.status(200).json({
            success: true,
            message:'activity found',
            response: allActivities
        })

    }catch(error){
        return res.status(400).json({
            success: false,
            message:'activity not found',
            response: null
        })
    }
}