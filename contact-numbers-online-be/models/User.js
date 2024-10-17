const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

userSchema.pre('save', async function (next) {
    next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
