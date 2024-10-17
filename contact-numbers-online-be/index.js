const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/contactdb', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.json());

app.use(cors());

const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contacts');

app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
