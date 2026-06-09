import { Comments } from "../models/commentsMpdel.js";

export const getAllComments = async () => {
  try {
    const comments = await Comments.find();
    return comments;
  } catch (error) {
    throw new Error("Error fetching comments: " + error);
  }
};
