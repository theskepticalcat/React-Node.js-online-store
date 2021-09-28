require('dotenv').config();   //чтобы мог считывать .env
const express = require('express');
const sequelize = require('./db');   //импортируем об-кт с конфигурацией из БД
const models = require('./models/models');
const cors = require('cors');   //для отправки запросов с браузера
const fileUpload = require('express-fileupload');
const router = require('./routes/index');   //импорт роутов
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();   //с него будет начинаться запуск приложения


app.use(cors());
app.use(express.json());   //чтобы приложение могло парсить json-формат
app.use(express.static(path.resolve(__dirname, 'static')));   //ук-ем, что файлы из папки статик надо раздавать как статику
app.use(fileUpload( {} ));
app.use('/api', router);

//Обработка ошибок, последний middleware:
app.use(errorHandler);


//Ф-ция для подключения к БД:
const start = async () => {
    try {
        await sequelize.authenticate();   //с её помощью будет утс-тся подключение к БД
        await sequelize.sync();   //эта ф-ция сверяет состояние БД со схемой БД
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))   //какой порт должен прослушивать наш сервер  //второй параметр - коллбэк, кот сработает при успешном запуске сервера
    } catch (e) {
        console.log(e);
    }
}
start();