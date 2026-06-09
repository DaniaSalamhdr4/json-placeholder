import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
