const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { SchoolsRouters } = require('./routes');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(SchoolsRouters);

app.listen(PORT, () => console.log(`No ar pela ${PORT}`));
