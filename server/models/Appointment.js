import mongoose from "mongoose";


const AppointmentSchema=new mongoose.Schema({

NormalUserId:{
    type:mongoose.Schema.ObjectId,
    ref:"User"
},
SchedulerId:{
    type:mongoose.Schema.ObjectId,
    ref:"Scheduler"
},
Comment: String,
partnerName:{
    type:String,
    required:[true,"firstname is required"]
},
nationalId:{
    type:String,
    required:true,
    unique:true

},
status: {
        type: String,
        enum: ["pending", "approve", "decline"],
        default: "pending"
    },
    registeredOn: {
        type: String,
        default: Date.now(),
      },


});

SessionSchema.pre(/^find/,function(next) {
    this.populate({
        path:"NormalUserId",
        select:"firstName lastName email phone gender"
    }).populate({
        path:"SchedulerId",
        select:"Services date timeToStart timeToEnd"
    });
    next();
    
})
 const appointmentInfo = mongoose.model("Appointment", AppointmentSchema);
 export default appointmentInfo;