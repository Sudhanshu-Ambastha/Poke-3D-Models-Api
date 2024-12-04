const express = require("express");
const mongoose = require("mongoose");
const pokeRoutes = require("../routes/PokeRoutes"); // Import routes

const app = express();
const PORT = 5000;

mongoose.connect("mongodb://localhost:27017/PokeData")
  .then(() => {
    console.log("Connected to MongoDB");
    mongoose.set('debug', true); // Enable Mongoose debugging
  })
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Middleware
app.use(express.json()); // To parse JSON data

// Routes
app.use("/api/pokemon", pokeRoutes); // Set the base URL for Pokemon routes

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
