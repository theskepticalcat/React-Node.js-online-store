//Декодировать токен и проверять его на валидность:

const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {  //если метод = options, то пропускаем
        next();
    }
    try {
        const token = req.headers.authorization.split('')[1];  //выцепить token из header
        if(!token) {
            return res.status(401).json({message: "Не авторизован"});
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);  //проверка токена на валидность
        req.user = decoded;
        next();     //выз-ем следующий в цепочке middleware
    } catch(e) {
        res.status(401).json({message: "Не авторизован"});
    }
}