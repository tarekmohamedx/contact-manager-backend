const express = require("express");
const ContactControler = require("../controllers/contact.controller");
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();
const contactValidation = [
    body("Name").notEmpty().withMessage("Name is required"),
    body("Phone").notEmpty().withMessage("Phone is required"),
    body("Address").notEmpty().withMessage("Address is required"),
    body("notes").optional().isString().withMessage("Notes must be a string"),
    body("user")
        .notEmpty()
        .withMessage("User ID is required")
];

router.get("/", ContactControler.getAllContacts);
router.post("/", authMiddleware, contactValidation, ContactControler.addNewContact);

module.exports = router;
