import { Schema,model } from "mongoose";

// create cart schema
const cartSchema = new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref: 'product' //name of the product model
    }
})

// create user schema
const userSchema = new Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true // adds to index 
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    cart:{
        type:[cartSchema]
    }
},{
    strict:"throw",
    timestamps:true
})

export const userModel = model("user",userSchema);