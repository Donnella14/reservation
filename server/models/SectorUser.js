import mongoose from "mongoose";


const sectorSchema=new mongoose.Schema({
sectorName:{
    type:String,
    required:[true,"sectorname is required"]

},

employee:{
    type:mongoose.Schema.ObjectId,
    ref:"User"
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

sectorSchema.pre(/^find/,function(next) {
    this.populate({
        path:"employee",
        select:"firstName lastName email phone gender nationalId "
    });
    next();
        
})
 const sectorInfo = mongoose.model("Sector", sectorSchema);

 export default sectorInfo;