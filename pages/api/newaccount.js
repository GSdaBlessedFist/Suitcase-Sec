import mongoose from 'mongoose'
import dbConnect from "../../lib/mongoose";
import User from "../../models/userModel";
import comments from "../../comments.js";

export default async function handler(req, res) {
   let message;
    const {email,password} = req.body;
  try{
    dbConnect()
    console.log("connected to Mongo")
    if(req.method == "POST"){
      const targetUser = await User.findOne({email:email})
      if(!targetUser ){

        const userAdd = await User.create({
          email,password
        });
        message = comments.userFeedback.NewAccountSuccess;
        res.json({
          message:message,
          loginStep: "NewAccountSuccess"
        })
        console.log("A new entry was created.")
      }else{
        message = comments.userFeedback.NewAccountFail;
        res.json({
          message:message,
          loginStep: "NewAccountFail"
        })
        console.log("Nothing happened")
        return null;
      }
      
      return null;
    }    
  }catch(err){
    console.log(`ERROR: ${err}`);
    res.status(500);
  }
    
}


