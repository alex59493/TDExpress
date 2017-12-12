const {Router} = require('express');
const router = new Router();

const controller = require('./messages.controller');

router.get('/', controller.findAll);
router.get('/:id', controller.findOne);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
