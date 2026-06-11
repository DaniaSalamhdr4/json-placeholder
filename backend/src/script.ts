import express from "express";
import userRoutes from "./routes/userRoutes.js";
import todoRoutes from "./routes/todosRoutes.js";
import postRouter from "./routes/postsRoutes.js";
import photoRouter from "./routes/photosRouters.js";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/connectDB.js";

const app = express();
connectDB();
const PORT = process.env.PORT || 3000;

// users API
app.use("/users", userRoutes);

//Todos APIs
app.use("/todos", todoRoutes);

// Photos APIs
app.use("/photos", photoRouter);

// posts APIs
app.use("/posts", postRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
