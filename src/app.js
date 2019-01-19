const express = require('express');

const app = express();
const knight = require('./knight');

app.get('/calculate/:position', (req, res) => {
  const result = knight(req.params.position);
  res.send(result);
});

app.listen(process.env.PORT || 3000, () => console.log('api running'));