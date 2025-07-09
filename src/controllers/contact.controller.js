const { validationResult } = require("express-validator");
const ContactRepository = require("../repositories/contact.repoistory");

getAllContacts = async (req, res) => {
  console.log("Get all contacts called");
  res.send("All Contacts");
};

addNewContact = async (req, res) => {
  console.log("Add new contact called", req.body);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const contact = req.body;
  await ContactRepository.Create(contact);
  res.status(201).json({
    message: "Contact created",
    contact: contact,
  });
};

module.exports = {
  getAllContacts,
  addNewContact,
};
