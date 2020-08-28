const express = require("express");
const { 
  getPosts, 
  createPosts, 
  postsByUser, 
  postById, 
  isPoster,
  updatePost,
  deletePost 
} = require("../controllers/post");
const { requireSignin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { createPostValidator } = require("../validator");

const router = express.Router();

router.get("/posts", getPosts);
router.post("/posts/new/:userId", requireSignin, createPosts, createPostValidator);
router.get("/posts/by/:userId", postsByUser);
router.delete("/posts/:postId", requireSignin, isPoster, deletePost);
router.put("/posts/:postId", requireSignin, isPoster, updatePost);

// Any route containing :userId, our app will first execute userById()
router.param("userId", userById);
// Any route containing :postId, our app will first execute postById()
router.param("postId", postById);

module.exports = router;
