const express = require('express');
const ContactControler = require('../controllers/contact.controller');

const router = express.Router();


router.get('/', ContactControler.getAllContacts);