const errorHandler = (err, req, res, next) => {
  const errStatus = err?.response?.status || err.statusCode || 500;
  const errMsg = err?.response?.data?.error || err.message || 'Something went wrong';
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
  });
};

module.exports = errorHandler;
