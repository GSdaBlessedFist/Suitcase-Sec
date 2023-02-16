import connectDB from "../../mongooseConnection";
import User from "../../models/UserModel";
import bcrypt from "bcryptjs";
const p = console.log;

export default async function handler(req, res) {
  const user = req.body.username;
  const password= req.body.password;
  console.log(`password: ${password}`);

  function validateUser(hash) {
    bcrypt
      .compare(password, hash)
      .then(res => {
        console.log(res) // return true
      })
      .catch(err => console.error(err.message))        
  }
  try{
    connectDB()
    console.log("connected to Mongo")
    if(req.method === "POST"){
      const targetUser = await User.findOne({username:user})
      const targetHash = await targetUser.password;
      
      const isValid = await bcrypt.compare(password,targetHash)
      p(targetUser)
      p(targetHash)
      p(`isValid: ${isValid}`)
      res.json(Object.keys(isValid))
    }    
  }catch(err){
    console.log(err);
    res.status(500);
  }
    
}


