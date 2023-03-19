const router = require('express').Router();
const {home, about} = require('./controller');

router.get('/', home);

router.get('/about', about);

module.exports = router;
