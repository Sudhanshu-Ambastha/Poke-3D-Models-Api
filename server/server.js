const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); 

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

const PokeModelSchema = new mongoose.Schema({
    pokemon: [{
        id: Number,
        name: String,
        model: String
    }]
});

const PokeModel = mongoose.model('PokeModels', PokeModelSchema);

app.get('/api/data', async (req, res) => {
    try {
        const data = await PokeModel.find();  
        res.json(data);  
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});