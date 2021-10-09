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

phone:{
    type:String
    
},

  address: {type:String,
    default:"Rwanda"},
});


 const sectorInfo = mongoose.model("Sector", sectorSchema);

 export default sectorInfo;