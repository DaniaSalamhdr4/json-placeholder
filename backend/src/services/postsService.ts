import { Posts } from "../models/postsModel.js";

export const getAllPosts = async () => {
  try {
    const posts = await Posts.find();
    return posts;
  } catch (error) {
    throw new Error("Error fetching posts: " + error);
  }
};

//get Posts by id
export const getPostById = async (id: string) => {
  return await Posts.findById(id);
};
