const mongodb = require('../DB/database')
const ObjectId = require('mongodb').ObjectId
//const contactId = require('mongodb').ObjectId

const getAll = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('contacts').find()
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(lists) //just need the first one
    })
}

const getSingle = async (req, res) => {
    const contactId = new ObjectId(req.params.id)
    const result = await mongodb.getDb().db().collection('contacts').find({ _id: contactId })
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json')
      res.status(200).json(lists[0])
    })
  }

const createContact = async (req, res) => {
const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
}
const response = await mongodb.getDb().db().collection('contacts').insertOne(contact)
if (response.acknowledged) {
    res.status(201).json(response)
} else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.')
}
}

const updateContact = async (req, res) => {
const contactId = new ObjectId(req.params.id)
const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
}
    const response = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .replaceOne({ _id: contactId }, contact)
    console.log(response)
    if (response.modifiedCount > 0) {
      res.status(204).send()
    } else {
      res.status(500).json(response.error || 'Some error occurred while updating the contact.')
    }
  }

const deleteContact = async (req, res) => {
const contactId = new ObjectId(req.params.id)
const response = await mongodb.getDb().db().collection('contacts').remove({ _id: contactId }, true)
console.log(response)
if (response.deletedCount > 0) {
    res.status(204).send()
} else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.')
}
}

module.exports = {
    getAll,
    getSingle,
    createContact,
    updateContact,
    deleteContact
}