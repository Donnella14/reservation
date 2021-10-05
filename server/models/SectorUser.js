import mongoose from "mongoose";


const sectorSchema=new mongoose.Schema({
sectorName:{
    type:String,
    required:[true,"sectorname is required"]

},
email: {
    type: String,
    required: [true, "email is required"]
},

password:{
    type:String,
    default:"12345@@@@"
},
phone:{
    type:String
    
},

role:{
    type:String,
    enum:["admin","Employer"],
    default:"Employer"
},
status:{
    type:String,
    enum:["active","inactive"],
    default:"active"
},

  address: {type:String,
    default:"Rwanda"},
});


 const sectorInfo = mongoose.model("Sector", sectorSchema);
 export default sectorInfo;
