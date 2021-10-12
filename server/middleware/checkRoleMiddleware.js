const jwt = require('jsonwebtoken');

module.exports = function (role) {       //принимает роль  //возвращает middleware
    return function (req, res, next) {
        if (req.method === "OPTIONS") {  //если метод = options, то пропускаем
            next();
        }
        try {
            const token = req.headers.authorization.split('')[1];       //выцепить token из header
            if(!token) {
                return res.status(401).json({message: "Не авторизован"});
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY);  //декодируем токен
            if(decoded.role !== role) {                                 //проверяем роль
                return res.status(403).json({message: "Нет доступа"});
            }
            req.user = decoded;
            next();                 //выз-ем следующий в цепочке middleware
        } catch(e) {
            res.status(401).json({message: "Не авторизован"});
        }
    }
}