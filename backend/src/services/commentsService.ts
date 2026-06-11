import { Comments } from "../models/commentsMpdel.js";
import { getPostById } from "./postsService.js";

export const getAllComments = async () => {
  try {
    const comments = await Comments.find();
    return comments;
  } catch (error) {
    throw new Error("Error fetching comments: " + error);
  }
};

// GET comments by posts id
export const getCommentsByIdPost = async (id: string) => {
  const comments = await Comments.find({ postId: Number(id) });
  return comments;
};
