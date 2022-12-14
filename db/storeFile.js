const util = require('util');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync("db/db.json", "utf8")
    }

    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }

    addNote(note) {
        const { title, text } = note

        if (!title || !text) {
            throw new Error("Must enter title and text")
        }

        const newNote = { title, text, id: uuidv4() }

        return this.getNotes()
            .then (notes => [...notes, newNote])
            .then (updatedNotes => this.write(updatedNotes))
            .then(() => this.newNote)
    }

    getNotes() {
        return this.read()
            .then(notes => {
                return JSON.parse(notes) || [];
            })
    }

    deleteNote(id) {
        return this.getNotes()
            .then(notes => notes.filter(note => note.id !== id))
            .then(keepNotes => this.write(keepNotes))
    }
}

module.exports = new Store();