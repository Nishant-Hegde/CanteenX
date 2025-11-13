const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Get all items
router.get('/', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Add a new item
router.post('/', async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.json(item);
});

module.exports = router;