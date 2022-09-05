const util = require('util');
const fs = require('fs');
const uuid = require('uuid');

const readFileSync = util.promisify(fs.readFile);
const writeFileSync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileSync("db/db.json", 'utf8')
    }

    write() {
        return writeFileSync("db/db.json", JSON.stringify(note));
    }

    addNote(note) {
        const { title, text } = note
        if(!title || !text) {
            throw new Error("Must enter title and text")
        }

        const newNotes = { title, text, id: uuid() }

        return this.getNote()
            .then (notes => [...notes, newNotes])
            .then (refreshNote => this.write(refreshNote))
            .then(() => this.newNotes)
    }

    getNote() {
        return this.read()
            .then(notes => {
                return JSON.parse(notes) || [];
            })
    }

    deleteNote(id) {
        return this.getNote()
            .then(notes => notes.filter(note => note.id !== id))
            .then(keepNotes => this.write(keepNotes))
    }
}

module.exports = new Store();