import express from "express";
import { getPostById } from "../controllers/posts.controller.js";

const router = express.Router();

// GET all posts
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Fetching all posts"
  });
});

// GET single post by ID (dynamic route)
router.get("/:postId", getPostById);

export default router;
