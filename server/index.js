// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import cors from 'cors';

// import pokeRoutes from './routes/db.route.js'; 

// dotenv.config();

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(bodyParser.json());

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected...'))
//   .catch(err => {
//     console.error('MongoDB connection error:', err);
//     process.exit(1); 
//   });

// app.use('/v1', pokeRoutes);

// app.get('/', (req, res) => res.send('Hello from Pokemon3D.'));

// app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import {
  RegularPokemon,
  ShinyPokemon,
  AlolanPokemon,
  HisuianPokemon,
  MegaPokemon,
  GalarPokemon,
  GmaxPokemon,
  MegaShinyPokemon,
  MultiFormPokemon,
  ShadowPokemon,
  UniquePokemon,
  XyPokemon,
  PrimalPokemon,
  OriginPokemon,
} from './models/db.model.js';

import router from './routes/db.route.js';
const app = express();
const port = 3000;

dotenv.config();


// Connect to MongoDB using the parsed information
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: false, useUnifiedTopology: false }
)
.then(() => console.log('MongoDB connected successfully.'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Function to fetch data from a specific collection
async function fetchData(collectionName) {
  let model;
  switch (collectionName) {
    case 'RegularPokemon':
      model = RegularPokemon;
      break;
    case 'PrimalPokemon':
      model = PrimalPokemon;
      break;
    case 'ShinyPokemon':
      model = ShinyPokemon;
      break;
    case 'AlolanPokemon':
      model = AlolanPokemon;
      break;
    case 'HisuianPokemon':
      model = HisuianPokemon;
      break;
    case 'MegaPokemon':
      model = MegaPokemon;
      break;
    case 'GalarPokemon':
      model = GalarPokemon;
      break;
    case 'GmaxPokemon':
      model = GmaxPokemon;
      break;
    case 'MegaShinyPokemon':
      model = MegaShinyPokemon;
      break;
    case 'MultiFormPokemon':
      model = MultiFormPokemon;
      break;
    case 'ShadowPokemon':
      model = ShadowPokemon;
      break;
    case 'UniquePokemon':
      model = UniquePokemon;
      break;
    case 'XyPokemon':
      model = XyPokemon;
      break;
    case 'OriginPokemon':
      model = OriginPokemon;
      break;
    case 'PrimalPokemon':
      model = PrimalPokemon;
      break;
    default:
      throw new Error(`Unsupported collection: ${collectionName}`);
  }

  try {
    const data = await model.find();
    console.log('Fetched data from collection:', collectionName, data);
    return data; 
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err; 
  }
}

// Example usage: Fetch data from the "pokemons" collection 
fetchData('RegularPokemon');

app.get('/api/pokemon', async (req, res) => {
  try {
    const pokemonData = await fetchData('RegularPokemon'); 
    res.json(pokemonData); 
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});