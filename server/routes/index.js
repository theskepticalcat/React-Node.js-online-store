const Router = require('express');
const router = new Router();   //создаем объект роутера, который получили из express

//Импортируем роутеры:
const deviceRouter = require('./deviceRouter');
const userRouter = require('./userRouter');
const brandRouter = require('./brandRouter');
const typeRouter = require('./typeRouter');


//Сопоставление маршрутов с роутерами:
router.use('/user', userRouter);   //первыйм параметром - url, по которому этот роутер будет отрабатывать
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);


module.exports = router;