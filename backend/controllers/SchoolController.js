const { StatusCodes } = require('http-status-codes');

const { Escolas } = require('../models');

const serverErrorMessage = 'Something went wrong';

const getAll = async (_req, res) => {
  try {
    const schools = await Escolas.findAll();

    return res.status(StatusCodes.OK).json(schools);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(serverErrorMessage);
  }
};

const add = async (req, res) => {
  try {
    const { nome, responsavel } = req.body;

    const school = await Escolas.create({ nome, responsavel });

    return res.status(StatusCodes.CREATED).json(school);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(serverErrorMessage);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, responsavel } = req.body;

    await Escolas.update({ nome, responsavel }, {
      where: {
        id,
      },
    });

    return res.status(StatusCodes.OK).json({ id, nome, responsavel });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(serverErrorMessage);
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;

    await Escolas.destroy({ where: { id } });

    return res.status(StatusCodes.NO_CONTENT).json({});
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(serverErrorMessage);
  }
};

module.exports = {
  getAll,
  add,
  update,
  remove,
};
