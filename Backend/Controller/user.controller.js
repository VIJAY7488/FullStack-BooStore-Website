import User from "../Model/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) =>{
      try {
        const {fullname, email, password} = req.body;
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message:"user already exist"})
        }
        const hashPassword = await bcrypt.hash(password,10)
        const createUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        });
        await createUser.save();
        res.status(201).json({message: "User created successfully"});
      } catch (error) {
        console.log("Error:"+ error.message);
        res.status(500).json({message: "Internal server error"});
        
      }

};


export const login = async (req, res) =>{
  try {
     const {email, password} = req.body;
     const user = await User.findOne({email})
     const isMatch = await bcrypt.compare(password, user.password)
     if(!user || !isMatch){
      return res.status(400).json({message: "Inavlid username or password"})
     }
     else{
      res.status(200).json({message: "Login successful", user:{
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
      }})
     }
  } catch (error) {
      console.log("Error :" + error.message);
      res.status(500).json({message: "Internal server issue"})
  }
}; 