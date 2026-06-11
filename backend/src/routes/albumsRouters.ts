import { getAlbumsController } from "../controllers/albumsController.js";
import { Router } from "express";

const router = Router();

router.get("/", getAlbumsController);

export default router;
