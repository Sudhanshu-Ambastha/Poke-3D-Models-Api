const Pokemon = require('../models/Pokemon');

exports.getAllPokemon = async (req, res) => {
  try {
    const regularPokemon = await RegularPokemon.find();
    res.status(200).json(pokemon);
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    res.status(500).json({ error: 'Failed to fetch Pokemon' });
  }
};