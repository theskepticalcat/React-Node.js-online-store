const uuid = require('uuid');
const path = require('path');
const { Device, DeviceInfo } = require('../models/models');
const { nextTick } = require('process');
const ApiError = require('../error/ApiError');


class DeviceController {
    async create(req, res, next) {
        try {
        let {name, price, brandId, typeId, info} = req.body;
        const {img} = req.files;                                    //получили файл
        let fileName = uuid.v4() + ".jpg";
        img.mv(path.resolve(__dirname, '..', 'static', fileName))   //перемещение файла с заданным именем в нужную папку после получения //чтобы могли получать через браузер

        const device = await Device.create( {name, price, brandId, typeId, img: fileName} );   //создаём устройство

        if (info) {                         //если инфо есть
            info = JSON.parse(info);        //=> в js об-кт
            info.forEach(i =>
                DeviceInfo.create({         //для каждого эл-та массива создаём об-кт
                    title: i.title,
                    description: i.description,
                    deviceId: device.id
                })
                
            )
        }

        return res.json(device);            //возвращаем инфу о нём обратно на клиент
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    //Получение всех девайсов:
    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query;
        page = page || 1;
        limit = limit || 9;                 //по 9 устройств на каждой странице
        let offset = page * limit - limit;  //отступ

        let devices;

        if(!brandId && !typeId) {
            devices = await Device.findAndCountAll(limit, offset);
        }
        if(brandId && !typeId) {
            devices = await Device.findAndCountAll({where:{brandId}, limit, offset});    //передаём об-кт опций с условием
        }
        if(!brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId}, limit, offset});
        }
        if(brandId && typeId) {     //оба указаны
            devices = await Device.findAndCountAll({where:{brandId, typeId}, limit, offset});
        }
        return devices;
    }

    //Получение по айди определенного девайса:
    async getOne(req, res) {
        const {id} = req.params;                            //этот параметр указывали в deviceRouter.js
        const device = await Device.findOne(                //передаём об-кт опций с условием
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]  //получить массив характеристик для детального просмотра св-тв устройства
            },
        )
        return res.json(device);                            //возвращаем девайс на клиент
    }
}


module.exports = new DeviceController();