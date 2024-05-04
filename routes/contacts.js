const express = require('express')
const router = express.Router()
const contactsController = require('../controllers/contacts')


//GET
router.get('/', contactsController.getAll)
router.get('/:id', contactsController.getContact)

module.exports = router