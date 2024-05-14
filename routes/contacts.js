const express = require('express')
const router = express.Router()
const contactsController = require('../controllers/contacts')

// GET
router.get('/', contactsController.getAll)
router.get('/:id', contactsController.getSingle)
// POST
router.post('/', contactsController.createContact)
// UPDATE
router.put('/:id', contactsController.updateContact)
// DELETE
router.delete('/:id', contactsController.deleteContact)

module.exports = router