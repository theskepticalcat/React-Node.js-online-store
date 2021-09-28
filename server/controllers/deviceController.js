const uuid = require('uuid');
const path = require('path');   //модуль Node.js
const { Device } = require('../models/models');
const { nextTick } = require('process');
const ApiError = require('../error/ApiError');


class DeviceController {
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body;
        const {img} = req.files;   //получили файл
        let fileName = uuid.v4() + ".jpg";
        img.mv(path.resolve(__dirname, '..', 'static', fileName))  //перемещение файла с заданным именем в нужную папку после получения //чтобы могли получать через браузер

        const device = await Device.create( {name, price, brandId, typeId, img: fileName} );   //создаём устройство

        return res.json(device);   //возыращаем инфу о нём обратно на клиент
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {

    }

    async getOne(req, res) {   //будем получать по айди определенный девайс

    }
}


module.exports = new DeviceController();