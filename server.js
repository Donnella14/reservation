import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({path:'./.env'});

const app = express();
const databaseUrl= process.env.DATABASE;
mongoose.connect(databaseUrl,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log("Database connected successfully")); 

app.listen(5050, ()=>{
    //console.log(databaseUrl);
 

    
     console.log('server is running on port 5050');
 
 })
 
 
 export default app;