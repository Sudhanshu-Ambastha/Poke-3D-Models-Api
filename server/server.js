const express = require('express');
const mongoose = require('mongoose');
const PokemonModel = require('./models/pokemon'); // Assuming you have a PokemonModel

const app = express();
const port = 3000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/api/data', async (req, res) => {
  const { form, name, id } = req.query;  // Get the query parameters
  
  try {
    let filter = {};

    // Build filter object based on query parameters
    if (form) filter['pokemon.form'] = form;
    if (name) filter['pokemon.name'] = { $regex: name, $options: 'i' }; // Case-insensitive search
    if (id) filter['pokemon.id'] = id;

    // Find the filtered Pokémon data
    const pokemonData = await PokemonModel.find(filter);

    res.json(pokemonData);
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    res.status(500).json({ error: 'Failed to fetch Pokémon data' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
