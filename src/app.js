const express = require('express');

const app = express();
const knight = require('./knight');

app.get('/calculate/:position', (req, res) => {
  const result = knight(req.params.position);
  res.send(result);
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', ' GET, POST, PUT, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
  );
  next();
})

app.listen(process.env.PORT || 3000, () => console.log('api running'));