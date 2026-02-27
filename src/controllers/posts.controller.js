const { successResponse } = require('../utils/response');

let posts = []; // mock DB

exports.getAllPosts = (req, res) => {
  res.status(200).json(successResponse(posts, 'Posts fetched successfully'));
};

exports.getPostById = (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));

  if (!post) {
    return res.status(404).json({
      success: false,
      message: 'Post not found'
    });
  }

  res.status(200).json(successResponse(post, 'Post fetched successfully'));
};

exports.createPost = (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content
  };

  posts.push(newPost);

  res.status(201).json(successResponse(newPost, 'Post created successfully'));
};

exports.updatePost = (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));

  if (!post) {
    return res.status(404).json({
      success: false,
      message: 'Post not found'
    });
  }

  post.title = req.body.title || post.title;
  post.content = req.body.content || post.content;

  res.status(200).json(successResponse(post, 'Post updated successfully'));
};

exports.deletePost = (req, res) => {
  posts = posts.filter(p => p.id !== parseInt(req.params.id));

  res.status(200).json(successResponse(null, 'Post deleted successfully'));
};