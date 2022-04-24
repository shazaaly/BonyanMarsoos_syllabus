'use strict'


let data
const processData = () => {
    data = '123456789'

}
processData()
console.log(data)

/* read existing notes from local storage */

const getSavedNotes = () => {

    const notesJson = localStorage.getItem('notes')
    try {
        return notesJson ? JSON.parse(notesJson) : []

    } catch (error) {
        return []

    }


}
/*removenote from list */

const removeNote = (id) => {
    const noteId = notes.findIndex((note) => note.id == id)

    if (noteId > -1) {
        notes.splice(noteId, 1)

    }


}
//generate DOM structure for a note//

const generateNoteDom = (note) => {
    const noteEl = document.createElement('a')

    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')

    // button.textContent = 'x'
    // noteEl.appendChild(button)
    // button.addEventListener('click', () => {


    //     removeNote(note.id)
    //     saveNotes(notes)
    //     renderNotes(notes, filters)

    // })

    if (note.title.length > 0) {
        textEl.textContent = note.title

    } else {
        textEl.textContent = 'unnamed note title'
    }

textEl.classList.add('lis-item__title')
    noteEl.appendChild(textEl)
    noteEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.classList.add('list-item')
    statusEl.textContent = generateLastEditedMessage(note.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)

    return noteEl


}



//save notes in local storage:
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))

}

//  sort by function :

const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1

            } else if (a.updatedAt < b.updatedAt) {
                return 1

            } else {
                return 0
            }

        })


    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1

            } else if (a.createdAt < b.createdAt) {
                return 1

            } else {
                return 0
            }

        })

    } else if (sortBy === 'alphabitical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1

            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1

            } else {
                return 0
            }

        })

    }
    else {
        return notes
    }


}

//render filtered notes//
const renderNotes = (notes, filters) => {
    const notesEl = document.querySelector('#notes')

    notes = sortNotes(notes, filters.sortBy)

    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))


    notesEl.innerHTML = ''
    if (filteredNotes.length > 0) {
        filteredNotes.forEach((note) => {

            const p = generateNoteDom(note)
            notesEl.appendChild(p)

        })

    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = `No notes to show`
        emptyMessage.classList.add('empty-message')

        notesEl.appendChild(emptyMessage)

    }



}

const generateLastEditedMessage = (timestamp) => `Note updated At : ${moment(timestamp).fromNow()}`




