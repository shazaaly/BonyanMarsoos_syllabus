
'use strict'

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeButtonElement = document.querySelector('#remove-note')
const dateElement = document.querySelector('#last-edited')   //span

const id = location.hash.substring(1)
let notes = getSavedNotes()

let note = notes.find((note) => note.id === id)

if (!note) {
    location.assign('index.html')

}

titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = generateLastEditedMessage(note.updatedAt)


titleElement.addEventListener('input', function (e) {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEditedMessage(note.updatedAt)

    saveNotes(notes)
})
bodyElement.addEventListener('input', function (e) {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEditedMessage(note.updatedAt)


    saveNotes(notes)
})

removeButtonElement.addEventListener('click', function (e) {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('index.html')
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)


        note = notes.find(function (note) {

            return note.id === id
        })

        if (!note) {
            location.assign('index.html')

        }

        titleElement.value = note.title
        bodyElement.value = note.body
        dateElement.textContent = generateLastEditedMessage(note.updatedAt)




    }



})