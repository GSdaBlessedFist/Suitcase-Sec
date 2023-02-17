import {useState} from "react";
import dbConnect from "../../lib/mongoose";
import User from "../../models/userModel";
import comments from "../../comments.js";
import bcrypt from "bcryptjs";
const p = console.log;
const saltRounds = 10;

export default async function handler(req, res) {
    let message;
    let isValid;
    const {email,password} = req.body;
    
  try{
    await dbConnect()
    console.log("connected with Mongoose")
    if(req.method === "POST"){
      const targetUser = await User.findOne({email:email})
      const targetHash = await targetUser.hashword;
      
      const validPassword = await bcrypt.compare(password,targetHash)
      if(!validPassword){
        console.log("Incorrect login info.")
        let signinFailmessage = comments.userFeedback.SigninFail;
        res.json({
          message: signinFailmessage,
          loginStep: "SignInFail"
        })
        return
      }
      let signinSuccessMessage = comments.userFeedback.SigninSuccess;
        res.json({
          message: signinSuccessMessage,
          loginStep: "SigninSuccess"
        })
      console.log("Successfully logged in")

      
      
    }    
  }catch(err){
    console.log(err);
    res.status(500);
  }
    
}


