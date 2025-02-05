import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import router from './routes/db.route.js';

const app = express();
dotenv.config();
const port = process.env.PORT;

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: false, useUnifiedTopology: false }
)
.then(() => console.log('MongoDB connected successfully.'))
.catch(err => console.error('Error connecting to MongoDB:', err));

app.use('/v1', router); 

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});