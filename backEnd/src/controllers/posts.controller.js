const { deleteFile } = require("../middlewares/deleteImgCloudinary");
const Post = require("../models/posts.models");
const post = require("../models/posts.models");
const HTTPSTATUSCODE = require("../utilities/httpcodes")



const getAllPosts = async (req, res, next) => {
  try {
    const allPosts = await Blog.find();
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      Posts: allPosts,
    });
  } catch (error) {
    return next(error);
  }
};


const getPostByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const postsByID = await Blog.findById(id);
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      Post: postsByID,
    });
  } catch (error) {
    return next(error);
  }
};


const createPost = async (req, res, next) => {
  try {
    const newPosts = new Blog(req.body);
    if (req.file) {
      newPosts.picture = req.file.path;
    }
    const createdPosts = await newPosts.save();
    return res.json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      Post: createdPosts,
    });
  } catch (error) {
    return next(error);
  }
};

const deletePost = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const postDeleted = await Post.findByIdAndDelete(id);
  
      return res.status(200).json(postDeleted);
    } catch (error) {
      return next(error);
    }
  };
  
  const patchPost = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const patchPost = new Post(req.body);
  
      patchPost._id = id;

      const postData= await Post.findById(id)


      if (postData.picture) {
        deleteFile(postData.picture);
        }

      if (req.file) {
        patchPost.picture = req.file.path;
      }
  
      const PostDB = await Post.findByIdAndUpdate(id, patchPost);
      
      return res.status(200).json({ new: patchPost, old: PostDB });
    } catch (error) {
      return next(error);
    }
  };

module.exports = {  getAllPosts,
  getPostByID,
  createPost,
  deletePost,
  patchPost,};