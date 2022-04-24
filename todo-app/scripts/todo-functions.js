//fetch todos fromlocal storage//


const fetchTodos = () => {

    const myTodosJson = localStorage.getItem('myTodos')
    try {
        return myTodosJson ? JSON.parse(myTodosJson) : []


    } catch (error) {
        return []

    }

}
// remove todo

const removeTodo = (id) => {

    const todoIndex = myTodos.findIndex(function (myTodo) {
        return myTodo.id == id

    })

    if (todoIndex > -1) {
        myTodos.splice(todoIndex, 1)

    }
}
//save todos to local storage 
const saveTodos = function (myTodos) {
    let myTodosJson = JSON.stringify(myTodos)
    myTodos = JSON.parse(myTodosJson)
    localStorage.setItem('myTodos', myTodosJson)

}


// render filtered todos:
const renderTodos = function (myTodos, filters) {
    const todoEl = document.querySelector('#todos')

    let filteredTodos = myTodos.filter(function (myTodo) {


        const textMatch = myTodo.text.toLowerCase().includes(filters.searchText.toLowerCase())

        const hideCompletedMatch = !myTodo.completed || !filters.hideCompleted

        return textMatch && hideCompletedMatch

    })


    const uncomp = filteredTodos.filter(function (todo) {
        return !todo.completed
    })


    todoEl.innerHTML = ''

    // 
    todoEl.appendChild(getSummaryDom(uncomp))

    if (filteredTodos.length > 0) {

        filteredTodos.forEach(function (todo) {

            todoEl.appendChild(domCreator(todo))

        })

    } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = `There are no to-dos to show`
        document.querySelector('#todos').appendChild(messageEl)
    }


}

const getSummaryDom = function (uncomp) {
    let taskWord = 'task'
    const incompleteTasksNum = document.createElement('h2')
    incompleteTasksNum.classList.add('list-title')
    if (uncomp.length > 1 || uncomp.length === 0) {
        taskWord = 'tasks'

    }


    incompleteTasksNum.textContent = `You have  ${uncomp.length} ${taskWord} left`
    return incompleteTasksNum


}
//toggle completed todo:
const toggleTodo = function (id) {
    const todo = myTodos.find(function (todo) {
        return todo.id === id

    })
    if (todo) {
        todo.completed = !todo.completed

    }


}

const domCreator = function (myTodo) {

    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')

    checkbox.checked = myTodo.completed
    checkbox.addEventListener('change', function () {
        toggleTodo(myTodo.id)
        saveTodos(myTodos)
        renderTodos(myTodos, filters)
    })


    containerEl.appendChild(checkbox)
    const removeButton = document.createElement('button')
    const todoText = document.createElement('span')
    todoText.textContent = myTodo.text
    containerEl.appendChild(todoText)


    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)

    removeButton.addEventListener('click', function () {
        removeTodo(myTodo.id)
        saveTodos(myTodos)
        renderTodos(myTodos, filters)
    })


    return todoEl

}



