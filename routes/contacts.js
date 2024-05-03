const express = require('express')
const contactsController = require('../controllers/contacts')
const router = express.Router()

//GET
router.get('/', contactsController.getAll)
router.get('/:id', contactsController.getContact)

module.exports = router