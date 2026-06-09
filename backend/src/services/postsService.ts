import {Posts} from "../models/postsModel.js";

export const getAllPosts = async () => {
  try {
    const posts = await Posts.find();
    return posts;
  }  catch (error) {
    throw new Error("Error fetching posts: " + error);
  }
};
