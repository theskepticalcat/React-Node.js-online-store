const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Basket } = require('../models/models');  //модели пользователя и корзины


//Ф-ция генерации токена:
const generateJwt = (id, email, role) => {
    return jwt.sign(              //1й параметр - payload токена; 2й - секретный ключ; 3й - опции
        {id, email, role}, 
        process.env.SECRET_KEY,
        {expireIn: '24h'}         //сколько живет токен
    )
} 


class UserController {
    //Регистрация пользователя:
    async registration(req, res) {
        const {email, password, role} = req.body;                   //получаем, деструктурируем
        if(!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'));
        }
        const candidate = await User.findOne({where: {email}})      //проверка есть ли уже под таким email пользователь
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'));
        }
        const hashPassword = await bcrypt.hash(password, 5);        //ф-ция bcrypt фсинхронная  //2-й параметр сколько раз хэшировать
        const user = await User.create({email, role, password: hashPassword});  //создаём нового пользователя
        const basket = await Basket.create({userId: user.id});
        const token = generateJwt(user.id, user.email, user.role);  //генерируем токен
        return res.json({token});                                   //возвращаем токен на клиент
    }

    //Авторизация пользователя:
    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if(!user) {
            return next(ApiError.internal('Пользователь с таким именем не найден'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);  //сравниваем пароли: 1-й анписал пользователь, 2й из БД
        if(!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'));
        }
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token});       //возыращаем токен на клиент
    }

    //Авторизован или нет:
    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({token});
    }
}


module.exports = new UserController();   //экспортируем об-кт, сщзданный из этого класса (к ф-циям будем обр-ться через точку)