import { getUsersController } from "../controllers/usersController.js";
import { Router } from "express";

const router = Router();

//get all users
router.get("/", getUsersController);

export default router;
