import { getAllComments } from "../services/commentsService.js";
import type { Request, Response } from "express";

//get all comment
export const getCommentsController = async (req: Request, res: Response) => {
  try {
    const comment = await getAllComments();
    res.status(200).json(comment);
  } catch (error) {
    console.error("Error fetching all comments", error);
  }
};
