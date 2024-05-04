const express = require('express')
const mongodb = require('./DB/database')
const app = express()

const port = process.env.PORT || 8080

app.use('/', require('./routes'))
app.get('/', require('./routes'))


app.listen(8080, () => {
    console.log(`Server is running on port ${port}`);
})