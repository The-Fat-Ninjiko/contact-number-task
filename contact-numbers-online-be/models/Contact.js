const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    notes: String
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
