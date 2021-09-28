const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', userController.check);   //авторизован или нет  //ф-ции передаём как об-кт (не вызываем)



module.exports = router;