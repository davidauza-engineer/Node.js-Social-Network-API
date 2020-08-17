const express = require("express");
const { getPosts, createPosts } = require("../controllers/post");
const { createPostValidator } = require("../validator");

const router = express.Router();

router.get("/posts", getPosts);
router.post("/posts", createPostValidator, createPosts);

module.exports = router;
