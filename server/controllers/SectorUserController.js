import sectorInfo from "../models/SectorUser";


class SectorUserController{
    static createSector = async(req,res)=>{
        
        const session = await sectorInfo.create(req.body);
        if(!session){
            return res.status(400).json({
                status:400,
                message:"failed to register a sector"
            })
        
        }
        return res.status(200).json({
            status:200,
            message:"success",
            data:session
        })
    }
    
    static getAllSector = async(req,res)=>{
        const sectors = await sectorInfo.find();
    
        if (!sectors) {
            return res.status(404).json({
                status:404,
                message:"failed to get all sector!"
            })
            
        }
    
        return res.status(200).json({
            status:200,
            message:"success!",
            data:sectors
        })
    }
    static getOne = async(req,res)=>{
        const session = await sectorInfo.findById(req.params.id);
        if(!session){
            return res.status(400).json({
                status:400,
                message:"failed to get that user"
            })
        
        }
        return res.status(200).json({
            status:200,
            message:"success to get the session",
            data:session
        })
    }
    static updateSector = async(req,res)=>{
        const update = await sectorInfo.findByIdAndUpdate(req.params.id,req.body);
        if(!update){
            return res.status(400).json({
                status:400,
                message:"failed to update"
            })
        
        }
        const updated = await sectorInfo.findById(req.params.id);
        return res.status(200).json({
            status:200,
            message:"successfully updated",
            data:updated
        })
    }
    static deleteSector = async(req,res)=>{
        const session = await sectorInfo.findByIdAndDelete(req.params.id);
        if(!session){
            return res.status(400).json({
                status:400,
                message:"failed to delete"
            })
        
        }
       //// const deleted = await SessionInfo.find();
        return res.status(200).json({
            status:200,
            message:"Success to delete this session.",
            data:session
            //data:deleted
        })
    }

    
    // static getAllUserSector = async (req, res)=> {
    //     const id = req.params.id;
    //     console.log(req.user);
    //     const users = await sectorInfo.find({Employee:req.user.id});
    //     if (!users){
    //         return res.status(404).json({
    //             status: 404,
    //             message: "failed to get all Sessions"
    //         })
    //     }
    //     return res.status(200).json({
    //         status: 200,
    //         message: "success",
    //         data:users
    //     })
    // }
}

export default SectorUserController;

