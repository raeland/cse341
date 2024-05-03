const mongodb = require('../DB/database')
const ObjectId = require('mongodb').ObjectId

const getAll = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('contacts').find()
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(lists) //just need the first one
    })
}

const getContact = async (req, res, next) => {
    const contactId = new ObjectId(req.params.id)
    const result = await mongodb.getDb().db().collection('contacts').find({_id:contactId})
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(lists[0]) //just need the first one
    })
}

module.exports = {
    getAll,
    getContact
}