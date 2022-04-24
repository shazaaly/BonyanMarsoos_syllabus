const myTodos = fetchTodos()

// Filter/searchText Challenge//
const filters = {
    searchText: '',
    hideCompleted: false
}




renderTodos(myTodos, filters)

document.querySelector('#search-todos').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(myTodos, filters)

})

// form challenge


document.querySelector('#todoForm').addEventListener('submit', function (event) {
    event.preventDefault()
    const text = event.target.elements.text.value.trim()

    if (text.length > 0) {
        myTodos.push({
            id: uuidv4(),
            text,
            completed: false

        })
        renderTodos(myTodos, filters)
        saveTodos(myTodos)

    }

    event.target.elements.text.value = ''


})

// Challecge: hide completed

document.querySelector('#check').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(myTodos, filters)

})

// document.querySelector('#select').addEventListener('change', function (e) {
//     console.log(e.target.value)


// })












/*1- challenge is to build these mytodos into paragraphs in an empty html a <h2> for every todo
2- print a summary msg how many todos needed to be completed

*/

/* use filter method:*/



// myTodos.forEach(function (todo) {
//     const p = document.createElement('p')
//     p.textContent = todo.text
//     document.querySelector('body').appendChild(p)

// })

// event listener challenge:

// document.querySelector('button').addEventListener('click', function (e) {
//     e.target.textContent = `A new todo has been added`

// })

// document.querySelector('button#add-todo').addEventListener('click', function (e) {
//     e.target.textContent = ` todo created`

// })


// let incomplete = 0
// for (let i = 0; i < myTodos.length; i++) {
//     if (myTodos[i].completed == false) {
//         incomplete++
//     }
//     console.log("No of uncompleted tasks : " + incomplete)

// }






/*
const ps = document.querySelectorAll('p')
ps.forEach(function (p) {
    if (p.textContent.includes('the')) {
        p.remove()

    } else {
        console.log(p.textContent)
    }

})
*/