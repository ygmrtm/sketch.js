const express = require('express');
const { queryNotion } = require('../services/notion-service');

const router = express.Router();

router.post('/query', async (req, res) => {
  try {
    const { sketchType } = req.body;
    const result = await queryNotion(sketchType);
    res.json(result);
  } catch (error) {
    console.error('Error querying Notion:', error);
    res.status(500).json({ error: 'An error occurred while querying Notion' });
  }
});

module.exports = router;