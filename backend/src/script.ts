import express from "express";
import userRoutes from "./routes/userRoutes.js";
import todoRoutes from "./routes/todosRoutes.js";
import postRouter from "./routes/postsRoutes.js";
import photoRouter from "./routes/photosRouters.js";
import albumRouter from "./routes/albumsRouters.js";
import commentRouter from "./routes/commentsRouter.js";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/connectDB.js";

const app = express();
connectDB();
const PORT = process.env.PORT || 3000;
app.use(express.json());
// users API
app.use("/users", userRoutes);

//Todos APIs
app.use("/todos", todoRoutes);

// Photos APIs
app.use("/photos", photoRouter);

// Albums APIs
app.use("/albums", albumRouter);

// comments APIs
app.use("/comments", commentRouter);

// posts APIs
app.use("/posts", postRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
