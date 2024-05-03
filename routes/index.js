const router = require('express').Router()
const professionalRoutes = require('./professional')
const contactsRoutes = require('./contacts')

const myController = require('../controllers')

//GET
router.get('/', myController.awesomeFunction)
router.get('/awesome', myController.returnAnotherPerson)

//USE
router.use('/professional', professionalRoutes)
router.use('/contacts', contactsRoutes)


module.exports = router