const express = require("express");
const { getPosts, createPosts } = require("../controllers/post");
const { requireSignin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { createPostValidator } = require("../validator");

const router = express.Router();

router.get("/posts", getPosts);
router.post("/posts", requireSignin, createPostValidator, createPosts);

// Any route containing :userId, our app will first execute userById()
router.param("userId", userById);

module.exports = router;
