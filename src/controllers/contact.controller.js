const { validationResult } = require("express-validator");
const ContactRepository = require("../repositories/contact.repoistory");

addNewContact = async (req, res) => {
  console.log("Add new contact called", req.body);
  const userId = req.user.id;
  req.body.user = userId;
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


const getUserContacts = async (req, res) => {
  console.log("From contact Controller");
  
  const userId = req.user.id;
  const userName = req.user.username;
  console.log(`Fetching contacts for user from token: ${userId}`);
  

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  try {
    const contacts = await ContactRepository.GetByUserId(userId, skip, limit);
    const total = await ContactRepository.CountDocuments({ user: userId });

    res.json({
      contacts,
      paginationData: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = {
  addNewContact,
  getUserContacts
};
