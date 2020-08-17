const express = require("express");
const { getPosts, createPosts } = require("../controllers/post");
const validator = require("../validator");

const router = express.Router();

router.get("/posts", getPosts);
router.post("/posts", validator.createPostValidator, createPosts);

module.exports = router;
