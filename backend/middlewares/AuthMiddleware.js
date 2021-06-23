const { StatusCodes } = require('http-status-codes');

const { API_KEY } = process.env;

const validateAuthorization = async (req, res, next) => {
  const { authorization } = req.headers;

  if ((!authorization) || (authorization !== API_KEY) || (authorization === '')) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Unauthorized' });
  }

  return next();
};

module.exports = {
  validateAuthorization,
};
