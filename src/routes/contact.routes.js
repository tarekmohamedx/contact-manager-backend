const express = require('express');
const ContactControler = require('../controllers/contact.controller');
const { body } = require('express-validator');

const router = express.Router();


router.get('/', ContactControler.getAllContacts);
router.post('/', contactValidation, ContactControler.addNewContact);

const contactValidation = [
    body('Name').notEmpty().withMessage('Name is required'),
    body('Phone').notEmpty().withMessage('Phone is required'),
    body('Address').notEmpty().withMessage('Address is required'),
    body('notes').optional().isString().withMessage('Notes must be a string')
]

module.exports = router;