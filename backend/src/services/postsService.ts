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

//POST posts
export const postPosts = async (data: string) => {
  try {
    const newPost = new Posts(data);
    const savedPost = await newPost.save();
    return savedPost;
  } catch (error) {
    console.error("failed ceating post", error);
  }
};
//PUT post by ID

//PATCH posts by ID

//DELETE Posts by ID
