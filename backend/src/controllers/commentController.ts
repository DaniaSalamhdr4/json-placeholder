import {
  getAllComments,
  getCommentsByIdPost,
} from "../services/commentsService.js";
import type { Request, Response } from "express";

//get all comment
export const getCommentsController = async (req: Request, res: Response) => {
  try {
    const { postId } = req.query;
    if (postId) {
      const comment = await getCommentsByIdPost(String(postId));
      return res.json(comment);
    }
    const comment = await getAllComments();
    res.status(200).json(comment);
  } catch (error) {
    console.error("Error fetching all comments", error);
  }
};

//GET comments by posts id

export const getCommentsByIdPostController = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const comment = await getCommentsByIdPost(id);
    res.status(200).json(comment);
  } catch (error) {
    console.error("Error fetching comments", error);
  }
};
