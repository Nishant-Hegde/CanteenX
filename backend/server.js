const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const itemsRouter = require('./routes/items');
const ordersRouter = require('./routes/orders');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/canteen_simple', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/items', itemsRouter);
app.use('/api/orders', ordersRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
