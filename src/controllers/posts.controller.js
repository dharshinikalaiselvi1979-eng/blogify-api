export const getPostById = async (req, res) => {
  const { postId } = req.params;

  res.status(200).json({
    message: "Fetching data for post with ID: " + postId
  });
};
