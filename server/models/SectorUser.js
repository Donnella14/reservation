import mongoose from "mongoose";

const sectorSchema=new mongoose.Schema({
sectorName:{
    type:String,
    required:[true,"firstname is required"]

},
email:{
    type:String,
    required:true,
    unique:true,
    validate: [validator.isEmail, "please provide"],
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
    enum:["admin","mentor","user"],
    default:"user"
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