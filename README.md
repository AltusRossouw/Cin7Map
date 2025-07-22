# Cin7Map

A Node.js backend that connects to the **Cin7 Core (DEAR Systems) API**, retrieves recent orders, extracts shipping addresses, and returns them via an HTTP endpoint.

## 🧰 Tech Stack

- Node.js
- Express
- Axios
- dotenv
- Cin7 Core API

## 🚀 Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Cin7Map.git
cd Cin7Map
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

Create a `.env` file in the root directory with your API credentials:

```env
CIN7_ACCOUNT_ID=your_account_id
CIN7_API_KEY=your_api_key
PORT=3001
```

> ⚠️ Never commit your `.env` file!

### 4. Run the Server

```bash
npm start
```

### 5. Test the Endpoint

Navigate to:

```
http://localhost:3001/orders
```

Expected JSON response:

```json
[
  {
    "customer": "John Doe",
    "address": "123 Main Rd, Cape Town, 8001, South Africa"
  },
  ...
]
```

## 📂 File Structure

```
Cin7Map/
├── server.js     # Main Express app
├── .env          # API credentials (excluded via .gitignore)
├── .gitignore
├── package.json
```

## 📌 Notes

- API is limited to 10 orders by default. You can expand or paginate results.
- Future improvements could include geocoding + frontend mapping (e.g., Leaflet or Mapbox).

---

## 📝 License

MIT