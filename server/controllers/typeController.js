const { Type } = require('../models/models');   //импорт модели Типа
const ApiError = require('../error/ApiError');

class TypeController {
    async create(req, res) {   //создать типы
        const {name} = req.body;   //извлекаем из тела запроса
        const type = await Type.create( {name} );   //создаём этот тип
        return res.json(type);
    }

    async getAll(req, res) {
        const types = await Type.findAll();  //получить типы (все существующие записи в БД)
        return res.json(types);
    }
}


module.exports = new TypeController();