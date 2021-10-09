import mongoose from "mongoose";


const AppointmentSchema=new mongoose.Schema({

NormalUser:{
    type:mongoose.Schema.ObjectId,
    ref:"User"
},
Scheduler:{
    type:mongoose.Schema.ObjectId,
    ref:"Scheduler"
},
Comment: String,
partnerName:{
    type:String,
    required:[true,"firstname is required"]
},
partnerNationalId:{
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

AppointmentSchema.pre(/^find/,function(next) {
    this.populate({
        path:"NormalUser",
        select:"firstName lastName email phone gender nationalId "
    }).populate({
        path:"Scheduler",
        select:"Services date timeToStart timeToEnd"
    });
    next();
    
})
 const appointmentInfo = mongoose.model("Appointment", AppointmentSchema);
 export default appointmentInfo;