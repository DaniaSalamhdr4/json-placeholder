import {
  getPostsController,
  getPostByIDController,
  createPostController,
  updatePostController,
  updatePostControllerPatch,
  deletePostControllerPat,
} from "../controllers/postsController.js";
import { Router } from "express";

const router = Router();

//get all posts
router.get("/", getPostsController);
router.get("/:id", getPostByIDController);
router.post("/", createPostController);
router.put("/:id", updatePostController);
router.patch("/:id", updatePostControllerPatch);
router.delete("/:id", deletePostControllerPat);
export default router;
