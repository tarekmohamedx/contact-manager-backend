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
    return await Contact.find({isDeleted: false});
}

const DeleteById = async (id) => {
    return await Contact.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
}

const GetById = async (id) => {
    return await Contact.findById(id ).where({ isDeleted: false });
}

const GetByUserId = async (userId, skip = 0, limit = 10) => {
    return await Contact.find({ user: userId, isDeleted: false })
      .skip(skip)
      .limit(limit);
  };

  const CountDocuments = async () => {
    console.log("count documents called");
    
    return await Contact.countDocuments({ isDeleted: false });
  };

  const CountUserDocuments = async (userId) => {
    return await Contact.countDocuments(userId, { isDeleted: false });
  };

module.exports = {
  Create,
  InsertMany,
  GetAll,
  DeleteById,
  GetById,
  Save,
  GetByUserId,
  CountUserDocuments,
  CountDocuments
};