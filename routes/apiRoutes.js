const router = require('express').Router();
const store = require('../db/storeFile');

// GET request for notes
router.get('/notes', (req, res) => {
    store
    .getNotes()
    .then(notes => {
        res.json(notes)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// POST for notes
router.post('/notes', (req, res) => {
    console.log(req.body);
    store
    .addNote(req.body)
    .then(note => {
        res.json(note)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// DELETE route for notes

router.delete('/notes/:id', (req, res) => {
    store
    .deleteNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch(err => res.status(500).json(err))
})

module.exports = router;