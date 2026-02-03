import exp from "express";
import { productModel } from "../Models/productModel.js";

export const productApp = exp.Router();

// read products
productApp.get("/products",async(req,res)=>{
    let productList = await productModel.find({});
    res.json({productList})
})

// product add req
productApp.post("/products",async(req,res)=> {
    let newProd = req.body;
    let product = new productModel(newProd);
    await product.save()
    res.json({message:"product is added",product});
})