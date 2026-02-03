import exp from "express";
import {connect} from "mongoose";
import { userApp } from "./API/userApi.js";
import { productApp } from "./API/productApi.js";
import cookieParser from "cookie-parser";

// create HTTP server
const app = exp();

// use body-parser middleware
app.use(exp.json());
// use cookie-parse middleware
app.use(cookieParser());

// connect to mongoDB database
const connection = async() => {
    try{
        let dbRes = await connect("mongodb://127.0.0.1:27017/ecomm-1");
        console.log("DB connected successful");
        app.listen(3000,()=> console.log("sever listening on port 3000..."));
    }catch(err){
        console.log("error in connection",err);
    }
}
connection();


// forward req to specific apis
app.use('/user-api',userApp);
app.use('/product-api',productApp);

// error handling middlewares
app.use((err,req,res,next)=> {
    res.status(500).json({message:"Error occured",reason:err.message})
})