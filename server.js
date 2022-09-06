const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;

const app = express();

// parse, JSON requirement
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// pull from folder given to us
app.use(express.static('public'));

// Use routes located in routes folder
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server on port ${PORT}`)
});