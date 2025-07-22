require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// ✅ Serve static frontend files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

// 🔽 This line pulls your mock order data
const mockOrders = require('./mock/orders.json');

// 🔽 This route serves the mock data to the frontend
app.get('/orders', (req, res) => {
  res.json(mockOrders);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));