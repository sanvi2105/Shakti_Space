import bcrypt from "bcryptjs"; //library to hash passwords
import jwt from "jsonwebtoken"; //to get JWt token -> jab koi user login krta hai, token proves theyre logged in
import User from "../models/userModel.js"; //mongodb collection

const register = async (req, res) => {
    try{
        const {username,email, password, role} = req.body; //destructring values from request body
        const user = await User.findOne({username}); //searches mongodb for a user with that username

        if (user){
            return res.status(400).json({
                message: `User with this username already exists. Please choose another name.`
            });
        }

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({
                message: "Email already exists"
            });
        }
        
        const hashedPassword = await bcrypt.hash(password, 10); //hash pass before saving, so they arent saved in plain text
        const newUser = new User({username,email, password: hashedPassword, role}); //creating new user using User Model
        await newUser.save(); //save user to mongodb
        const token = jwt.sign(
            { id: newUser._id, role: newUser.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        res                   //sends response back
            .status(201)      //201-http status for successful creation
            .json({
                token,
                user: {
                    id: newUser._id,
                    username: newUser.username,
                    role: newUser.role
            }}); 
    } catch(e){
        console.error("Auth error:", e);
        if (e.code === 11000) {
            return res.status(400).json({
                message: "Email or username already exists"
            });
        }
        res
            .status(500)
            .json({message: `Something went wrong.`});
    }
};

const login = async (req, res) => {
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username}); //searches mongodb for a user with that username

        if (!user){
            return res.status(404).json({message: `User with username ${username} not found`})
        }

        const isMatch = await bcrypt.compare(password, user.password); //compares entered pass and hashed pass
                                            // from db, brcypt itself hashes the entered password
        if (!isMatch){
            return res.status(400).json({message: `Invalid credentials`});
        }

        const token = jwt.sign(
            {id: user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn: "1h"}
        );                                  //jwt.sign(payload[data stored inside token, used to identify user], 
                                            //secret, options)

        res.status(200).json({
            token,
            user: {
                id: user._id,
                username: user.username,
                role: user.role
            }
        });
    } catch(e){
        res
            .status(500)
            .json({message: `Something went wrong.`});
    }
    
};

export {register, login};