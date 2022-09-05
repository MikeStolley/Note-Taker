const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();

const PORT = process.env.PORT || 3001;

// Use routes located in routes folder
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// pull from folder given to us
app.use(express.static('public'));

// parse, JSON requirement
app.use(express.json());
app.use(urlencoded({ encoded: true }));

app.listen(PORT, () => {
    console.log(`API server on port ${PORT}!`)
});