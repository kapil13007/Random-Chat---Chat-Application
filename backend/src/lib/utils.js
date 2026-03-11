import jwt from 'jsonwebtoken';
import { ENV } from './env.js';

export const generateToken = (userId,res) =>{
    
    const{JWT_SECRET} = ENV;
    if(!JWT_SECRET){
        throw new Error("JWT Secret is not configured");
    }
    const token = jwt.sign({userId:userId},JWT_SECRET,{
        expiresIn:"7d",     
    });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: ENV.NODE_ENV === "production" ? "none" : "strict",
        secure: ENV.NODE_ENV === "production" ? true : false,
    });
    return token;
};