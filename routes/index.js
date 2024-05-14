const express = require('express')
const router = express.Router()
const professionalRoutes = require('./professional')
const contactsRoutes = require('./contacts')

const myController = require('../controllers')

//GET
router.get('/', myController.awesomeFunction)
router.get('/awesome', myController.returnAnotherPerson)
router.get('/professional', professionalRoutes)
router.get('/contacts', contactsRoutes)

//USE
router.use('/professional', professionalRoutes)
router.use('/contacts', contactsRoutes)

module.exports = router