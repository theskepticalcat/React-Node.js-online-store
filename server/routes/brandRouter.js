const Router = require('express');
const router = new Router();
const brandController = require('../controllers/brandController');

router.post('/', brandController.create);   //чтобы бренд создавать
router.get('/', brandController.getAll);   //получать бренды
router.delete('/', );


module.exports = router;