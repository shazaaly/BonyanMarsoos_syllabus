const notes = [

    {
        title: 'Next Trip',
        body: 'I wouldd like to go to Spain'
    }, {
        title: 'Habits ',
        body: 'exercise 3 times weekly'

    }, {

        title: 'Ofice ',
        body: 'seats to be changed next weak'
    }]


















    


    const sortNotes = function(notes){
        notes.sort(function(a, b){
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            }else if(b.title.toLowerCase() < a.title.toLowerCase()){
                return 1
            }else{
                return 0
            }
            

        })

    }

    sortNotes(notes)
    console.log(notes)

   



    // const findNotes = function(notes, query){
    //     const filteredNotes = notes.filter(function(note , index){
    //         const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    //         const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    
    //         return isTitleMatch || isBodyMatch
           
    //     })
    //     return filteredNotes

    // }
   
    // let noteTosearch = findNotes(notes, 'exercise')
    // console.log(noteTosearch)

 

// /* call back function is a fn passed to a function*/
// // notes.forEach(function(item, index){

// //     console.log(index,item)
// // })
// // console.log(notes.length)

// // let position = notes.indexOf('Note 10')  /*return 0 if first  or 1if seconed  or -1 if not exists*/
// // console.log(position)

// // console.log(notes)
// // let empty = notes.indexOf({})  /* gives -1 */
// // console.log(empty)


// // let index = notes.findIndex(function(note , index){
// //     console.log(note)
// //     return note.title === 'Ofice '

// // })
// const findNote = function (notes, noteTitle) {

//     const ind = notes.findIndex(function (note) {

//         return note.title.toLowerCase() === noteTitle.toLowerCase()


//     })
//     return notes[ind]
    

// }

// const getNote = function(notes, noteTitleSearched){
//    return  notes.find(function(note){
//     return note.title === noteTitleSearched.title

//    })
 
  
// }


// let gotNote = getNote(notes,'Next Trip' )
// console.log(gotNote)

// // const findNote = function (notes, noteTitle) {

// //     const ind = notes.findIndex(function (note) {

// //         return note.title.toLowerCase() === noteTitle.toLowerCase()


// //     })
// //     return notes[ind]

// // }

// const myNoteSearch = findNote(notes, 'Ofice ')
// console.log(myNoteSearch)



