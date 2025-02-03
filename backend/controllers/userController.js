import { asyncHandler } from "../middlewares/asyncHandler.js";
import Users from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";


export const createUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if(!username || !email || !password ){
        throw new Error("Please fill the fields");
    }
    const existedUser = await Users.findOne({ email });
    if(existedUser){
        res.status(400).send("User already existed");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new Users({ username, email, password: hashedPassword});

    try {
       await newUser.save();
       generateToken(res, newUser._id)
       res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
       })
    } catch (error) {
        res.status(400);
        throw new Error(`The error message is  ${error}`);
    }
});

export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if( !email || !password ){
        throw new Error("Please fill the fields");
    }
    const existingUser = await Users.findOne({email});
    if(existingUser){
       const validPassword = await bcrypt.compare(password, existingUser.password);
       if(validPassword){
        generateToken(res, existingUser._id);
        res.status(201).json({
            _id: existingUser._id,
            username: existingUser.username,
            email: existingUser.email,
          });
       }
    }
    return;
    
});

export const logoutUser = asyncHandler(async (req, res) => {
    res.cookie("jwt", "", {
        httpOnly: true,
        expries: new Date(0)
    });
    res.status(200).json({
        message: "Logged out successfully",
      });
})