const express = require('express');
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is healthy'
  });
});
const postsRouter = require('./posts.routes');

const router = express.Router();

router.use('/posts', postsRouter);

module.exports = router;