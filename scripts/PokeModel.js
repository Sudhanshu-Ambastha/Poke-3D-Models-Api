const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  pokemon: [
    {
      id: { type: Number, required: true },
      name: { type: String, required: true },
      model: { type: String, required: true }
    }
  ]
});

const PokeModel = mongoose.model("PokeModel", pokemonSchema);
module.exports = PokeModel;
