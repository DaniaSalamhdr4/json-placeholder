import { User } from "../models/usersModel.js";
import { Posts } from "../models/postsModel.js";
import { Albums } from "../models/albumsModel.js";
import { Todo } from "../models/todoModel.js";
//get all users
export const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

//get user by id
export const getUserById = async (id: string) => {
  return await User.findById(id);
};

//get user posts
export const getUserPosts = async (userId: number) => {
  return await Posts.find({ userId });
};

// get user albums
export const getUserAlbums = async (userId: number) => {
  return await Albums.find({ userId });
};

//get user todos
export const getUserTodos = async (userId: number) => {
  return await Todo.find({ userId });
};
