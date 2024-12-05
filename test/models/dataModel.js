const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({}, { strict: false }); // Flexible schema
module.exports = mongoose.model('Data', dataSchema);