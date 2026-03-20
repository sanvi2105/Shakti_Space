import Story from "../models/storymodel.js";

 export const addStory = async(req,res)=>{
    try{
         const{name,story,image}=req.body;
         const newStory=new Story({name,story,image});

         await newStory.save();

         res.status(201).json({messgae:"Story added Successfully"});
    }catch(err){
        res.status(500).json({message:"Error has occured in adding stories"});
    }
  };

  export const getStories = async (req, res) => {
  try {
    const stories = await Story.find().sort({ createdAt: -1 });
    res.json(stories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching stories" });
  }
};



