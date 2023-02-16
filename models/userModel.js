import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  email: {
    type:String,
    unique:true,
    required:true
  },
  password: {
    type: String
  },
  hashword: {
    type: String
  }
})

UserSchema.pre("save", function (next) {
  const user = this

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError)
      } else {
        bcrypt.hash(user.password, salt, function(hashError, hash) {
          if (hashError) {
            return next(hashError)
          }

          
          user.hashword = hash
          next()
        })
      }
    })
  } else {
    return next()
  }
})

const User = mongoose.models?.User;
module.exports = User || mongoose.model("User", UserSchema)