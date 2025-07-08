const Contact = require('../models/contact.model');


const Create = async (contact) => {
    return await Contact.create(contact);
}

const InsertMany = async (contacts) => {
    return await Contact.insertMany(contacts);
}

const Save = async () => {
    return await Contact.save();
}

const GetAll = async () => {
    return await Contact.find({});
}

const DeleteById = async (id) => {
    return await Contact.findByIdAndDelete(id);
}

const GetById = async (id) => {
    return await Contact.findById(id);
}


module.exports = { 
    Create
    , InsertMany, }