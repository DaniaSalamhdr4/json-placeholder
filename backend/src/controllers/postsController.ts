import {
  getAllPosts,
  getPostById,
  postPosts,
  putPost,
  patchPost,
  deletePost,
} from "../services/postsService.js";
import type { Request, Response } from "express";

//get all posts
export const getPostsController = async (req: Request, res: Response) => {
  try {
    const posts = await getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching all posts" });
  }
};

//get posts by id
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

//create post {POST}
export const createPostController = async (req: Request, res: Response) => {
  try {
    const { title, body, userId } = req.body;
    if (!title || !body || !userId) {
      return res
        .status(400)
        .json({ message: "Missing required fields: title, body, userId" });
    }
    const newPost = await postPosts({ title, body, userId });
    res.status(201).json(newPost);
  } catch (error) {
    console.error("failed creatig postPosts", error);
  }
};

//update Post {PUT}

export const updatePostController = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const result = await putPost(id, req.body);
    if (result?.success) {
      res.status(200).json(result.data);
    }
  } catch (error) {
    console.error("failed updating postPosts {controller}", error);
  }
};

//update Post {PATCH}

export const updatePostControllerPatch = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const result = await patchPost(id, req.body);
    if (result?.success) {
      res.status(200).json(result.data);
    }
  } catch (error) {
    console.error("failed updating postPosts {controller}", error);
  }
};

//update Post {DELETE}
export const deletePostControllerPat = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const result = await deletePost(id);
    if (result?.success) {
      res.status(200).json(result.data);
    }
  } catch (error) {
    console.error("failed deleting postPosts {controller}", error);
  }
};
