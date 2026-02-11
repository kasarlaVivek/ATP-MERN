import exp from "express";
import { connect } from "mongoose";
import { config } from "dotenv";
import { adminApp } from "./API/adminApi.js";
import { authorApp } from "./API/authorApi.js";
import { userApp } from "./API/userApi.js";
import cookieParser from "cookie-parser";
import { commonApp } from "./API/commonApi.js";
config() //process.env

// create express application
const app = exp();
// add body parser middleware
app.use(exp.json());

// add cookie-parser middleware
app.use(cookieParser());

// conect to database
const connection = async() => {
    try{
        await connect(process.env.DB_URL);
        console.log("database connected successfully");
        app.listen(process.env.PORT,()=> console.log(`server listening on port ${process.env.PORT}..`));
    }catch(err){
        console.log("err occured",err);
    }
}
connection();


// connect API's
app.use("/user-api",userApp);
app.use("/admin-api",adminApp);
app.use("/author-api",authorApp);
app.use("/common-api",commonApp)

// middleware to deal with invalid path
app.use((req,res,next)=> {
    console.log(req);
    
    res.json({message:`${req.url} is invalid path`});
})

// error handling middleware
app.use((err,req,res,next)=> {
    console.log("error found");
    res.json({message:"error found",reason:err.message})
})