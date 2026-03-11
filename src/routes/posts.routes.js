import express from "express";
import * as postController from "../controllers/posts.controller.js";

const router = express.Router();

// GET all posts
router.get("/", postController.getAllPosts);

// GET single post by ID (dynamic route)
router.get("/:postId", postController.getPostById);

export default router;
