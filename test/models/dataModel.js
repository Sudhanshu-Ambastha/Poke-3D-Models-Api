const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({}, { strict: false }); 
module.exports = mongoose.model('Data', dataSchema);