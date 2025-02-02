const mongoose = require('mongoose');

const pokeSchema = new mongoose.Schema({
    id: Number,
    name: String,
    model: String
}, { collection: 'pokemodels' });  // Force correct collection name

const PokeModel = mongoose.model('pokemodels', pokeSchema);

module.exports = PokeModel;
