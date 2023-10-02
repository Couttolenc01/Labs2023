const express = require('express');

const isAuth = require('../util/is-auth');

const router = express.Router();

const entries = [];

const appTareasController = require('../controllers/appTareas_controller');


router.get('/new-entry', isAuth, appTareasController.getNewEntry);

router.post('/new-entry', isAuth, appTareasController.postNewEntry);

router.get('/:entry_id', isAuth, appTareasController.getEntry);

router.get('/', isAuth,  appTareasController.get);







module.exports = router;