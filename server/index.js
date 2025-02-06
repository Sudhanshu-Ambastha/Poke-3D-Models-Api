import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import router from './routes/db.route.js';

const app = express();
const cors = require('cors');
dotenv.config();
const port = process.env.PORT;
const allowedOrigins = [
  'https://pokemon3d-api.onrender.com', 'http://localhost:3000', 'http://localhost:5000', 'http://localhost:8080', 'http://localhost:5173', 'http://127.0.0.1:5173'];

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: false, useUnifiedTopology: false }
)
.then(() => console.log('MongoDB connected successfully.'))
.catch(err => console.error('Error connecting to MongoDB:', err));

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) { 
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

app.use('/v1', router); 

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});