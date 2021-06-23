const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');

const validateNewSchool = async (req, res, next) => {
  const value = req.body;
  const schema = Joi.object({
    nome: Joi.string().required(),
    responsavel: Joi.string().required(),
  });
  try {
    await schema.validateAsync(value);

    return next();
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Missing fields' });
  }
};

module.exports = {
  validateNewSchool,
};
