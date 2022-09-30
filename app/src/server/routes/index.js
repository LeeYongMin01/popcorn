const express = require('express');
const ctrl = require('../../controller/user.ctrl');

const router = express.Router();

router.get('/', ctrl.output.index);
router.get('/login', ctrl.output.login);
router.get('/signup', ctrl.output.signup);
router.get('/list', ctrl.output.list);

router.post('/login', ctrl.process.login);
router.post('/signup', ctrl.process.signup);

module.exports = router;