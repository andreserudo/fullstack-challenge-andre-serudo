module.exports = (sequelize, DataTypes) => {
  const Escola = sequelize.define('Escolas', {
    nome: DataTypes.STRING,
    responsavel: DataTypes.STRING,
  });

  return Escola;
};
