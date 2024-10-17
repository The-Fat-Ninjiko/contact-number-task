const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Existing login route
router.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({username});

    if (!user) {
        return res.status(400).send('Invalid username or password');
    }

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
        return res.status(400).send('Invalid username or password');
    }

    const token = jwt.sign({_id: user._id}, 'secretKey', {expiresIn: '1h'});
    res.send({token});
});

// New route to create a user
router.post('/register', async (req, res) => {
    const {username, password} = req.body;
    const userExists = await User.findOne({username});

    if (userExists) {
        return res.status(400).send('Username already exists');
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = new User({username, password: hashedPassword});
    await user.save();

    res.send({message: 'User registered successfully'});
});

module.exports = router;
