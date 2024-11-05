const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ChartData = require('./models/chartData');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // For parsing application/json

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/chartDataDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

// Route to get chart data
app.get('/api/chart-data', async (req, res) => {
    try {
        const chartData = await ChartData.find();
        res.json(chartData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to insert chart data (for example purposes)
app.post('/api/chart-data', async (req, res) => {
    const { label, value } = req.body;
    try {
        const newChartData = new ChartData({ label, value });
        await newChartData.save();
        res.status(201).json(newChartData);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
