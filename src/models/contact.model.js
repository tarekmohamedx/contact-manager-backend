const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
  Name: {type:String, required: true},
  Phone: {type:String, required: true},
  Address: {type:String, required: true},
  notes: String 
});
module.exports = mongoose.model('Contact', ContactSchema);