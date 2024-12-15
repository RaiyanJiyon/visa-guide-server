const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Visa Guide Server');
});

app.listen(port, () => {
    console.log(`Server is connected to port ${port}`);
});