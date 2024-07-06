import { User } from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const test = (req, res) => {
    res.send("Test is working")
}

// function => To register new user 
export const registerUser = async (req, res) => {
    try {
        //check email(already exist)
        const exist = await User.findOne({ email: req.body.email })
        if (exist) {
            return res.json({
                error: "E-mail is already exist."
            })
        }

        //check password
        if (req.body.password.length < 6) {
            return res.json({
                error: "Password should be atleast 6 characters long."
            })
        }

        //Hashing the password 
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        //Creating new user
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hash
        })

        res.json("User created successfully.")
    }
    catch (err) {
        console.log(err)
    }
}

// function => To login the user
export const loginUser = async (req, res) => {
    try {
        //Checking for email
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            return res.json({
                error: "Incorrect email"
            })
        }

        //Checking password
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (isPasswordCorrect) {

            //Jwt
            const token = jwt.sign({
                id: user._id,
                name: user.name,
                email: user.email
            }, process.env.JWT_KEY,)

            const { password, ...otherDetails } = user._doc
            res.cookie('token', token)
                .json({ ...otherDetails })

        } else {
            return res.json({
                error: "Incorrect password."
            })
        }
    }
    catch (err) {
        console.log(err)
    }
}

//function => To update the user details
export const updateUser = async(req,res)=>{
    try{
        const {email} = req.body.email
        const updateUser = await User.findOneAndUpdate(email, req.body)
        if(!updateUser){
            return res.json({
                error: "User not found."
            })
        }
        else{
            return res.json("Updated successfully.")
        }
    }
    catch(err){
        console.log(err)
    }
}

// function => to get profile of user
export const getProfile = (req, res) => {
    const { token } = req.cookies
    if (token) {
        jwt.verify(token, process.env.JWT_KEY, {}, (err, user) => {
            if (err) throw err;
            res.json(user)
        })
    } else {
        res.json(null)
    }

}