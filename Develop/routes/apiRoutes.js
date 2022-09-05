const router = require('express').Router();

const store = require('../db/storeFile');

// GET request for notes
router.get('/notes', (req, res) => {
    store
    .getNote()
    .then(notes => {
        res.json(notes)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// POST request for notes
router.post('/notes', (req, res) => {
    store
    .addNote(req.body)
    .then(note => {
        res.json(note)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;