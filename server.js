// == Backend: Node.js (Express) ==
// Requires: express, axios, cors, dotenv

// File: server.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/orders', async (req, res) => {
  try {
    const response = await axios.get('https://inventory.dearsystems.com/ExternalApi/v2/sale', {
      headers: {
        'api-auth-accountid': process.env.CIN7_ACCOUNT_ID,
        'api-auth-applicationkey': process.env.CIN7_API_KEY
      },
      params: {
        includeShippingAddress: true,
        page: 1,
        limit: 10
      }
    });

    const orders = response.data.Sale || [];
    const formatted = orders.map(order => {
      const addr = order.Customer?.ShippingAddress;
      const fullAddress = `${addr?.Line1 || ''}, ${addr?.City || ''}, ${addr?.Postcode || ''}, ${addr?.Country || ''}`;
      return {
        customer: order.Customer?.Name,
        address: fullAddress
      };
    });

    res.json(formatted);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));