import {
  getPostsController,
  getPostByIDController,
  createPostController,
} from "../controllers/postsController.js";
import { Router } from "express";

const router = Router();

//get all posts
router.get("/", getPostsController);
router.get("/:id", getPostByIDController);
router.get("/", createPostController);

export default router;
