const { Brand } = require('../models/models');   //импорт модели
const ApiError = require('../error/ApiError');


class BrandController {
    async create(req, res) {
        const {name} = req.body;   //извлекаем из тела запроса
        const brand = await Brand.create( {name} );   //создаём этот тип
        return res.json(brand);
    }

    async getAll(req, res) {
        const brands = await Brand.findAll();   //находим все об-кты
        return res.json(brands);   //получаем бренды
    }
}


module.exports = new BrandController();