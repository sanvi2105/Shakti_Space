import Application from "../models/applicationModel.js";

export const applyJob = async (req, res) => { //req from frontend, response sent to backend
    try {
        const userId = req.user.id;

        const {
            jobTitle, 
            name,
            phone,
            email,
            address,
            experience,
            skills,
            availability,
            whyHire
        } = req.body;

        const existing = await Application.findOne({
            user: userId,
            jobTitle,
        });

        if (existing) {
            return res.status(400).json({message: "Already applied"});
        }

        const newApplication = new Application({
            user: userId,
            jobTitle,
            name,
            phone,
            email,
            address,
            experience,
            skills,
            availability,
            whyHire,
        });

        await newApplication.save();

        res.status(201).json({message: "Application submitted"});
    } catch(e){
        console.error(e);
        res.status(500).json({message: "Server error"});
    }
};