
// Date challenge using moment js

const birth = moment()
birth.year(1982).month(10).date(14)
const birthday = birth.format('MMM D, YYYY')
console.log(`My Birth Day : ${birthday}`)

//Created and updated at challenge : 
notes.push({
        
    id: id,
    title: '',
    body: '',
    createdAt: created ,
    updatedAt: updated ,
})

titleElement.addEventListener('input', function (e) {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
})
bodyElement.addEventListener('input', function (e) {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()

    saveNotes(notes)
})