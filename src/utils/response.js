exports.successResponse = (data, message) => {
  return {
    success: true,
    message,
    data
  };
};