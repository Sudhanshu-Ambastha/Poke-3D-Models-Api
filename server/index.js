import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import pokeRoutes from './routes/db.route.js'; 

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); 
  });

app.use('/v1', pokeRoutes);

app.get('/', (req, res) => res.send('Hello from Pokemon3D.'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));