import { getCommentsController } from "../controllers/commentController.js";
import { Router } from "express";

const router = Router();

router.get("/", getCommentsController);

export default router;
