import mongoose from "mongoose";
export const albumsSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
});
