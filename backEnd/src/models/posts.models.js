const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    picture: { type: String, required: true },
    
  },
  { timestamps: true }
);

const Post = mongoose.model("posts", PostSchema);

module.exports = Post;