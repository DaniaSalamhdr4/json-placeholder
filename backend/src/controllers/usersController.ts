import {
  getAllUsers,
  getUserById,
  getUserPosts,
  getUserAlbums,
  getUserTodos,
} from "../services/usersService.js";
import type { Request, Response } from "express";

//get all users
export const getUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
};

//get user by id
export const getUserByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id as string);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user" });
  }
};

//get user posts
export const getUserPostsController = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const posts = await getUserPosts(Number(userId));
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user posts" });
  }
};

//get user albums
export const getUserAlbumsController = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const albums = await getUserAlbums(Number(userId));
    res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user albums" });
  }
};

//get user todos
export const getUserTodosController = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const todos = await getUserTodos(Number(userId));
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user todos" });
  }
};
