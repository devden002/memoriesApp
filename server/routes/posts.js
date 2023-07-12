import express from "express";
import {
  fetchPosts,
  createPosts,
  deletePost,
  updatePost,
  likePost,
  postDetail
} from "../controllers/posts.js";
import auth from '../middleware/auth.js'

const router = express.Router();

router.get("/", fetchPosts);
router.post("/", auth, createPosts);
router.delete("/:id", auth, deletePost);
router.patch("/:id", auth, updatePost);
router.patch("/likePost/:id", auth, likePost);
router.get("/post/:id", postDetail);

export default router;
