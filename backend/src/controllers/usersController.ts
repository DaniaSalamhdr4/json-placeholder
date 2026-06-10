import { getAllUsers } from "../services/usersService.js";
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
