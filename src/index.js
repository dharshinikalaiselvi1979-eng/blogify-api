import express from "express";
import postsRouter from "./routes/posts.routes.js";

const app = express();
const PORT = 5000;

app.use(express.json());

app.use("/api/v1/posts", postsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});