import mongoose from "mongoose";


const sectorSchema=new mongoose.Schema({
sectorName:{
    type:String,
   

},
user:{
    type:mongoose.Schema.ObjectId,
    ref:"User"
},
Employee:{
    type:mongoose.Schema.ObjectId,
    ref:"User"
},
email: {
    type: String,
    

},

phone:{
    type:String
    
},

  address: {type:String,
    default:"Rwanda"},
});

sectorSchema.pre(/^find/,function(next) {
    this.populate({
        path:"user",
        select:"firstName lastName email phone gender"
    }).populate({
        path:"Employee",
        select:"firstName lastName email phone gender"
    });
    next();
    
})
 const sectorInfo = mongoose.model("Sector", sectorSchema);

 export default sectorInfo;