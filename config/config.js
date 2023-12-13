require('dotenv').config();

module.exports = {
  development: {
    username: 'study',
    password: 'study1234',
    database: 'study',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: "study",
    password: 'study1234',
    database: "study",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: 'study',
    password: 'study1234',
    database: 'study',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false,
  },
};
