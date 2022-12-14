const express = require('express');
const ctrl = require('../../controller/index.ctrl');

const router = express.Router();

router.get('/', ctrl.output.index);
router.get('/login', ctrl.output.login);
router.get('/signup', ctrl.output.signup);
router.get('/list', ctrl.output.list);

router.post('/login', ctrl.process.login);
router.post('/signup', ctrl.process.signup);
router.post('/signup/idCheck', ctrl.process.idCheck);
router.post('/list', ctrl.process.list);

module.exports = router;