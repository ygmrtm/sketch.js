const express = require('express');
const cors = require('cors');
const notionRoutes = require('./routes/notion');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/notion', notionRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});