import exp from "express";
import { userModel } from "../Models/userModel.js";
import {productModel } from "../Models/productModel.js"
import { hash, compare } from "bcryptjs";


export const userApp = exp.Router();

// create user
userApp.post("/users",async(req,res)=> {
    let userData = req.body;
    // run validator without creating a new document.
    await new userModel(userData).validate();
    userData.password = await hash(userData.password,12);
    let userObj = new userModel(userData)
    await userObj.save({validateBeforeSave:false});
    res.json({message:"user added successfully",userObj})
})

// add product to user's cart
userApp.put("/user-cart/user-id/:uid/product-id/:pid",async(req,res)=> {
    // read uid and pid
    let userId = req.params.uid;
    let productId = req.params.pid;
    // check user and product
    let userObj = await userModel.findById(userId);
    if(!userObj){
        return res.status(401).json({message:"user not found"})
    }
    let productObj = await productModel.findById(productId);
    if(!productObj){
        return res.status(401).json({message:"product not found"})
    }
    // perform updated
    let modifiedUser = await userModel.findByIdAndUpdate(userId,{$push:{cart:{product:productId}}},{new:true}).populate("cart.product","productName price");
    res.status(200).json({message:"product added successfully",modifiedUser});
})


// read user data and cart 
userApp.get("/users/:uid",async(req,res)=> {
    let userId = req.params.uid;
    // populate is an aggregate function used to fetch documents from other collection using ref as argument.
    let userObj = await userModel.findById(userId).populate("cart.product","productName price");
    res.status(200).json({message:"user found",payload:userObj});
})