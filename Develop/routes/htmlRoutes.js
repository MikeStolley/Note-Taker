const path = require('path');
const router = require('express').Router();

//GET request, that enters notes into the HTML via routing

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

module.exports = router;