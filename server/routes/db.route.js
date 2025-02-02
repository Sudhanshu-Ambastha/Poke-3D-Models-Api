import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

const pokemonSchema = new mongoose.Schema({
  id: Number,
  name: String,
  model: String
}, { strict: false }); 

router.get('/:collectionName', async (req, res) => {
  const collectionName = req.params.collectionName;

  try {
    const Pokemon = mongoose.models[collectionName] || mongoose.model(collectionName, pokemonSchema);

    const pokemonList = await Pokemon.find({});

    console.log('Fetched data:', pokemonList); 

    const response = {
      pokemon: pokemonList.map(pokemon => ({
        id: pokemon.id,
        name: pokemon.name,
        model: pokemon.model,
      })),
    };

    res.json(response);

  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Server Error');
  }
});

export default router;