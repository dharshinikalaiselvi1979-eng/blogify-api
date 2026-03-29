import express from "express";
import postsRouter from "./routes/posts.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// mount posts router
app.use("/api/v1/posts", postsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
