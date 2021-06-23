require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: 'academic',
    host: process.env.DATABASE_HOSTNAME,
    dialect: 'postgres',
  },
  test: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: 'academic',
    host: process.env.DATABASE_HOSTNAME,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: 'academic',
    host: process.env.DATABASE_HOSTNAME,
    dialect: 'postgres',
  },
};
