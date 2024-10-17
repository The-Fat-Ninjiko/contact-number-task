const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

router.get('/', async (req, res) => {
    const contacts = await Contact.find();
    res.send(contacts);
});

router.get('/:id', async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    res.send(contact);
});

router.post('/', async (req, res) => {
    const contact = new Contact(req.body);
    await contact.save();
    res.send(contact);
});

router.put('/:id', async (req, res) => {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(contact);
});

router.delete('/:id', async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id);
    res.send({ message: 'Contact deleted' });
});

module.exports = router;
