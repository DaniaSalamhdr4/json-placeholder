import {
  getAllPosts,
  getPostById,
  postPosts,
} from "../services/postsService.js";
import type { Request, Response } from "express";

export const getPostsController = async (req: Request, res: Response) => {
  try {
    const posts = await getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching all posts" });
  }
};

export const getPostByIDController = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const postsId = await getPostById(id);
    res.status(200).json(postsId);
  } catch (error) {
    res.status(500).json({ message: "Error fetching post by id" });
  }
};

export const createPostController = async (req: Request, res: Response) => {
  try {
    const { title, body, userId } = req.body;
    if (!title || !body || !userId) {
      return res
        .status(400)
        .json({ message: "Missing required fields: title, body, userId" });
    }
    const newPost = await postPosts(JSON.stringify({ title, body, userId }));
    res.status(201).json(newPost);
  } catch (error) {
    console.error("failed creatig postPosts", error);
  }
};
