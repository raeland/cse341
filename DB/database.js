const dotenv = require('dotenv')
dotenv.config()
const MongoClient = require('mongodb').MongoClient

let DB

const initDb = (callback) => {
    if (DB) {
        console.log('Db is already initialized!')
        return callback(null, DB)
      }
      MongoClient.connect(process.env.MONGO_URI)
        .then((client) => {
          DB = client
          callback(null, DB)
        })
        .catch((err) => {
          callback(err)
        })
    }

    const getDb = () => {
        if (!DB) {
            throw Error('Database not initialized')
        }
        return DB
    }
module.exports = {
    initDb,
    getDb
}