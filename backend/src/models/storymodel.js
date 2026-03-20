import mongoose from "mongoose"; //importing moongose 

const storySchema=new mongoose.Schema({
    name:String,
    story:String,
    image:String

},{timestamps:true});

  const Story=mongoose.model("Story",storySchema);
  //create your schema then create model out of it 


  export default Story;

  