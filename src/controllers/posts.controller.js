// src/controllers/posts.controller.js

export const getAllPosts = async (req, res, next) => {
  try {
    const posts = [
      { id: 1, title: "First Post" },
      { id: 2, title: "Second Post" },
    ];

    return res.status(200).json({
      success: true,
      data: {
        posts,
        count: posts.length,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getPostById = async (req, res, next) => {
  try {
    const post = {
      id: req.params.id,
      title: "Sample Post",
    };

    return res.status(200).json({
      success: true,
      data: {
        post,
      },
    });
  } catch (error) {
    next(error);
  }
};