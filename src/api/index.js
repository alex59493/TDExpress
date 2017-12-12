const { Router } = require('express');

const router = new Router();

router.use('/messages', require('./messages'));

module.exports = router;
