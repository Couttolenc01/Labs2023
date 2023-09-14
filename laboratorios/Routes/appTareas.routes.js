const express = require('express');

const router = express.Router();

const entries = [];

const appTareasController = require('../controllers/appTareas_controller');

router.get('/:entry_id', appTareasController.getEntry);

router.get('/', appTareasController.get);

router.get('/new-entry', appTareasController.getNewEntry);

router.post('/new-entry', appTareasController.postNewEntry);








module.exports = router;