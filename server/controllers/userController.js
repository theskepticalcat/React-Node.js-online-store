const ApiError = require('../error/ApiError');

class UserController {
    async registration(req, res) {

    }

    async login(req, res) {

    }

    async check(req, res, next) {   //авторизован или нет
        const {id} = req.query;   //получаем параметры строки запроса
        if (!id) {
            return next(ApiError.badRequest("Не задан ID"));   //return - чтобы код дальше не выполнялся
        }
        res.json(id);
    }
}


module.exports = new UserController();   //экспортируем об-кт, сщзданный из этого класса (к ф-циям будем обр-ться через точку)