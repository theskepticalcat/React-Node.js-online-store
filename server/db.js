const { Sequelize } = require('sequelize');   //деструктурируем, т.к. модуль большой и нам нужен только этот класс

module.exports = new Sequelize(   //экспортруем об-кт из этого класса
    process.env.DB_NAME,   //название бд
    process.env.DB_USER,   //пользователь
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
);