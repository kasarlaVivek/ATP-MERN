import { Schema, model } from "mongoose";

const productSchema = new Schema({
    productName:{
        type:String,
        required:[true,"product name is required"]
    },
    price:{
        type:Number,
        required:[true,"product price is required"]
    },
    brand:{
        type:String,
        required:[true,"product brand is required"]
    }
}, {
    strict: "throw",
    timestamps: true,
    versionKey:false
})

export const productModel = model("product", productSchema);