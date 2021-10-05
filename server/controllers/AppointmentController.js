import appointmentInfo from "../models/Appointments";


class AppointmentController{
    static createAppointment = async(req,res)=>{
        req.body.SchedulerId=req.Scheduler.id;
        req.body.NormalUserId=req.NormalUser.id;
        const appointment = await appointmentInfo.create(req.body);
        if(!appointment){
            return res.status(400).json({
                status:400,
                message:"failed to register a scheduler"
            })
        
        }
        return res.status(200).json({
            status:200,
            message:"success",
            data:appointment
        })
    }
    
    static getAllAppointment = async(req,res)=>{
        const appointments = await appointmentInfo.find();
    
        if (!appointments) {
            return res.status(404).json({
                status:404,
                message:"failed to get all sector!"
            })
            
        }
    
        return res.status(200).json({
            status:200,
            message:"success!",
            data:appointments
        })
    }
    static getOne = async(req,res)=>{
        const appointment = await appointmentInfo.findById(req.params.id);
        if(!appointment){
            return res.status(400).json({
                status:400,
                message:"failed to get that user"
            })
        
        }
        return res.status(200).json({
            status:200,
            message:"success to get the session",
            data:appointment
        })
    }
    static updateAppointment = async(req,res)=>{
        const update = await appointmentInfo.findByIdAndUpdate(req.params.id,req.body);
        if(!update){
            return res.status(400).json({
                status:400,
                message:"failed to update"
            })
        
        }
        const updated = await schedulerInfo.findById(req.params.id);
        return res.status(200).json({
            status:200,
            message:"successfully updated",
            data:updated
        })
    }
    static deleteAppointment = async(req,res)=>{
        const appointment = await appointmentInfo.findByIdAndDelete(req.params.id);
        if(!appointment){
            return res.status(400).json({
                status:400,
                message:"failed to delete"
            })
        
        }
       //// const deleted = await SessionInfo.find();
        return res.status(200).json({
            status:200,
            message:"Success to delete this session.",
            data:appointment
            //data:deleted
        })
    }
}

export default AppointmentController;