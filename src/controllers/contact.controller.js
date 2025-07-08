const ContactRepo = require('../repositories/contact.repository');
const { validationResult } = require('express-validator');

getAllContacts = async (req, res) => {
    console.log('Get all contacts called');
    res.send('All Contacts');
  }


addNewContact = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
};




  module.exports = {
    getAllContacts
}