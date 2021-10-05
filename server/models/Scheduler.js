import mongoose from "mongoose";


const schedulerSchema=new mongoose.Schema({
    Services:String,
  SectorId:{
        type:mongoose.Schema.ObjectId,
        ref:"Sector"
    },
   
    date: Date,
    timeToStart: Date,
    timeToEnd: Date,
    status: {
            type: String,
            enum: ["pending", "approve", "decline"],
            default: "pending"
        }
    });
    schedulerSchema.pre(/^find/,function(next) {
        this.populate({
            path:"sector",
            select:"sectorName email phone address"
       });
        next();
        
    })
 const schedulerInfo = mongoose.model("Scheduler", schedulerSchema);
 export default schedulerInfo;