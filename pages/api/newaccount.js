import mongoose from 'mongoose'
import dbConnect from "../../lib/mongoose";
import User from "../../models/userModel";
import comments from "../../comments.js";

export default async function handler(req, res) {
   
    const {email,password} = req.body;

  try{
    await dbConnect()
    console.log("connected with Mongoose")

    if(req.method === "POST"){
      const targetUser = await User.findOne({email:email})
      const targetUserCount = await User.countDocuments({email:email})

      if(targetUserCount < 1 ){
        const userAdd = await User.create({
          email,password
        });

        let successMessage = comments.userFeedback.NewAccountSuccess;

        res.json({
          message: successMessage,
          loginStep: "NewAccountSuccess"
        })
        console.log("A new entry was created.")
        return
      }

      let failMessage = comments.userFeedback.NewAccountFail;
      res.json({
        message: failMessage,
        loginStep: "NewAccountFail"
      })
      console.log("Nothing happened")
     
    }  
    return  
  }catch(err){
    console.log(`ERROR: ${err}`);
    res.status(500);
  }
    
}


