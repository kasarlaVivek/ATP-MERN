import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

export const verifyToken = async(req,res,next) => {
    // read token from req
    let token = req.cookies.token;
    console.log(token);
    if(!token){
        return res.status(400).json({message:"Unauthorized request , please login"})
    }
    // verify validity of token(decoding the token
    let decodedToken = jwt.verify(token , process.env.JWT_SECRET);
    // forward req to next route or middleware
    next();
}