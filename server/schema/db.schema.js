import mongoose from 'mongoose';

const pokemonSchema = new mongoose.Schema({
  id: Number,
  name: String,
  model: String,
});

export default pokemonSchema;