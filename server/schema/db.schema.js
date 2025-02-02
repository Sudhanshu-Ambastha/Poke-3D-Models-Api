const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  id: Number,
  name: String,
  model: String
}, { strict: false });

module.exports = pokemonSchema;