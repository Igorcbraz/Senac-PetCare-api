// lembretes.routes.js
const express = require('express');
const router = express.Router();
const RemindersController = require('../controllers/reminders.controller');

router.get('/', RemindersController.listar);
router.post('/', RemindersController.criar);
router.put('/:id', RemindersController.atualizar);
router.delete('/:id', RemindersController.excluir);

module.exports = router;
