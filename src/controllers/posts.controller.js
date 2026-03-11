export const getPostById = async (req, res) => {
  try {
    const { postId } = req.params;

    res.status(200).json({
      message: "Fetching data for post with ID: " + postId
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching post",
      error: error.message
    });
  }
};
