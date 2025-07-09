const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/products', async (req, res) => {
  const products = await mongoose.model('Product').find();
  res.json(products);
});

app.post('/cart', async (req, res) => {
  const cart = await mongoose.model('Cart').create(req.body);
  res.json(cart);
});

app.post('/checkout', async (req, res) => {
  const order = await mongoose.model('Order').create(req.body);
  res.json(order);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});