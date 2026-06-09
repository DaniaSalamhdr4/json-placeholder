import {
  getUsersController,
  getUserByIdController,
  getUserPostsController,
  getUserAlbumsController,
  getUserTodosController,
} from "../controllers/usersController.js";
import { Router } from "express";

const router = Router();

//get all users
router.get("/", getUsersController);

router.get("/users/:id", getUserByIdController);
router.get("/users/:userId/posts", getUserPostsController);
router.get("/users/:userId/albums", getUserAlbumsController);
router.get("/users/:userId/todos", getUserTodosController);

export default router;
