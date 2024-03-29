import mongoose from "mongoose";


const PostSchema=mongoose.Schema({
  
  name:{type:String,required:true},
  prompt:{type:String,required:true},
  photo:{type:String,required:true}  
}, { timestamps: true });

const PostModel=mongoose.model('posts',PostSchema);

export default PostModel;