'use strict'


let notes = getSavedNotes()

/*1- filter()
2-clear div
3-create p for each note and append it to the div 
4- call th fn
5-  add event to put search valueinto searchText and call again*/
const filters = {
    searchText: '',
    sortBy: 'byEdited'

}

renderNotes(notes, filters)

document.querySelector('#search-text').addEventListener('input',  (e) =>{
    filters.searchText = e.target.value
    renderNotes(notes, filters)

})

document.querySelector('#filter-by').addEventListener('change',(e)=>{
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})


document.querySelector('#create-note').addEventListener('click',  (e)=> {
    const id = uuidv4()
    
    const timestamp = moment().valueOf()

    notes.push({
        
        id: id,
        title: '',
        body: '',
        createdAt: timestamp ,
        updatedAt: timestamp ,
    })

    saveNotes(notes)
    //renderNotes(notes, filters)
    location.assign(`/edit.html#${id}`)

})


// document.querySelector('#remove-all').addEventListener('click', function () {
//     document.querySelectorAll('.note').forEach(function (note) {
//         note.remove()

//     })

// })

document.querySelector('#search-text').addEventListener('change',  (e)=> {
    console.log(e.target.value)

})

document.querySelector('#search-text').addEventListener('input',  (e)=> {
    console.log(e.target.value)

})

document.querySelector('#for-fun').addEventListener('change',  (e)=> {
    console.log(e.target.checked)

})

window.addEventListener('storage',  (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        saveNotes(notes)
        renderNotes(notes, filters)

    }


})

const time = moment()
const createdAt = time.toString()
console.log(createdAt)


// document.querySelector('#name-form').addEventListener('submit', function(e){
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''

// })

// DOM :
// console.log('This is a welcome from js')

// Query and remove : this removes only 1st p
    // const p = document.querySelector('p')
    // p.remove()
    // console.log(p)
// Query alland remove
// const ps= document.querySelectorAll('p')
// ps.remove() -----> Uncaught TypeError: ps.remove is not a function so we have to foreach:


// ps.forEach(function(p){
//     console.log(p.textContent)
//     p.textContent = '************'
// })

// Adding a new element : 1-create a new element 2- give it a text value 3- insert it in place

// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new elemnt from Js'
// document.querySelector('body').appendChild(newParagraph)
