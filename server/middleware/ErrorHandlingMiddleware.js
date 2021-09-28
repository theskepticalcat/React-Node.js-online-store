const ApiError = require('../error/ApiError');


module.exports = function (err, req, res, next) {   //эта ф-ция и есть middleware
    if(err instanceof ApiError) {   //принадлежит ли об-кт к классу ApiError
        return res.status(err.status).json( {message: err.message} );
    }
    return res.status(500).json( {message: "Непредвиденная ошибка"} );
}