const express = require('express');
const { queryNotion } = require('../services/notion-service');
const router = express.Router();

router.post('/notion', async (req, res) => {
  const { sketchType } = req.body;
  if (!sketchType) {
    return res.status(400).json({ error: 'Sketch type is required' });
  }

  const result = await queryNotion(sketchType);
  res.json(result);
});

module.exports = router;
