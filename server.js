const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const mongodb = require('./DB/database')
const routes = require('./routes')
//const contactsRoutes = require('../routes/contacts')
const professionalRoutes = require('./routes/professional')

const port = process.env.PORT || 8080
const app = express()

app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
})
app.use('/professional', professionalRoutes)
app.use('/', routes)

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err)
    } else {
        app.listen(port)
        console.log(`Connected to DB and listening on ${port}`)
    }
})