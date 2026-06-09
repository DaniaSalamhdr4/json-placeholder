import { Todo } from "../models/todoModel.js";

//get all Todos
export const getAllTodos = async () => {
  try {
    const todos = await Todo.find();
    return todos;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

//get todo by id
export const getTodoById = async (id: string) => {
  return await Todo.findById(id);
};
