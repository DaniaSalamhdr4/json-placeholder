import { Comments } from "../models/commentsMpdel.js";

export const getAllComments = async () => {
  try {
    const comments = await Comments.find();
    return comments;
  } catch (error) {
    throw new Error("Error fetching comments: " + error);
  }
};

//get comment by id
export const getCommentById = async (id: string) => {
  return await Comments.findById(id);
};

