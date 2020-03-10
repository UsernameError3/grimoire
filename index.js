const express = require('express');
const app = express();

// Route for Root
app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

// Grab PORT# from Runtime Environment or Hardcode for localhost:5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);