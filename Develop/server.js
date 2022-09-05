const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');



// Use routes located in routes folder
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// pull from folder given to us
app.use(express.static('public'));

// parse, JSON requirement
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`API server on port ${PORT}!`)
});