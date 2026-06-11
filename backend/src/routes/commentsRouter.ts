import {
  getCommentsController,
  getCommentsByIdPostController,
} from "../controllers/commentController.js";
import { Router } from "express";

const router = Router();

router.get("/", getCommentsController);
router.get("/:id", getCommentsByIdPostController);
export default router;
