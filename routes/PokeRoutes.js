const express = require("express");
const PokeModel = require("../scripts/PokeModel"); 
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await PokeModel.find(); 
    res.json(data); 
  } catch (err) {
    res.status(500).json({ message: "Error fetching data", error: err });
  }
});

router.get("/pokemon/aggregate/:id", async (req, res) => {
  console.log("Received request:", req.url);
  console.log("Request params:", req.params);
  try {
    const pokemon = await PokeModel.aggregate([
      { $unwind: "$pokemon" },
      { $match: { "pokemon.id": parseInt(req.params.id) } },
      { $project: { "pokemon.name": 1, "pokemon.model": 1 } }
    ]);
    if (!pokemon.length) {
      return res.status(404).json({ message: "Pokémon not found" });
    }
    res.json(pokemon);
  } catch (err) {
    res.status(500).json({ message: "Error fetching data", error: err });
  }
});


router.get("/pokemon/aggregate/:name", async (req, res) => {
  try {
    const pokemon = await PokeModel.aggregate([
      { $unwind: "$pokemon" }, // Flatten the "pokemon" array
      { $match: { "pokemon.name": req.params.name } }, // Match by Pokémon name
      { $project: { "pokemon": 1, _id: 0 } } // Only return the "pokemon" field
    ]);

    if (!pokemon.length) {
      return res.status(404).json({ message: "Pokémon not found" });
    }

    res.json(pokemon[0]); // Return the found Pokémon
  } catch (err) {
    res.status(500).json({ message: "Error fetching data", error: err });
  }
});

module.exports = router;
