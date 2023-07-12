import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  description: String,
  author: String,
  name: String,
  creator: String,
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Posts = mongoose.model('Posts', postSchema)

export default Posts;
