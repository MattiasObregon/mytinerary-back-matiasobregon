import Activity from "../../models/Activity.js";

export default async(req, res)=>{
    try{ 
        let newActivity = await Activity.create(req.body)
        return res.status(200).json({
            success: true,
            message: 'activity created',
            response: newActivity
        })

    }catch(error){
        return res.status(400).json({
            success:false,
            message:'activity not created',
            response: null
        })
    }
}