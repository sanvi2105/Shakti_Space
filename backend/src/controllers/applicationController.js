import Application from "../models/applicationModel.js";

export const applyJob = async (req, res) => { //req from frontend, response sent to backend
    try {
        const userId = "507f1f77bcf86cd799439011"; // dummy valid ObjectId

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

export const getUserApplication=async(req,res)=>{
        try{
           const userId=req.user.id; //extracting user's logged in id
           const applications=await Application.find({user:userId});
           res.json(applications);
        }catch(err){
            res.status(500).json({message:"Error has occured in fetching application"});
        }
};

export const getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find();
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: "Error fetching applications" });
  }
};

export const updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const updated = await Application.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error updating status" });
  }
};