const express = require('express');

const router = express.Router();
const upload =require('../middlewares/uploadFileCloudinary');
const {isAuth} = require('../middlewares/auth.middleware.js')

const {
    getAllPosts,
    getPostByID,
    createPost,
    deletePost,
    patchPost,
} =require('../controllers/posts.controller');

router.get('/',getAllPosts )
router.get('/:id',getPostByID )
router.post('/', isAuth, upload.single('picture'), createPost);
router.delete('/', isAuth, upload.single('picture'), deletePost);
router.patch('/', isAuth, upload.single('picture'), patchPost);


module.exports = router;