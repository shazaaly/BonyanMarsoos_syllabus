
const myTodos = [
    {
        text: 'study geometry',
        completed: false
    },

    {
        text: 'Buy your lunch',
        completed: true
    },
    {
        text: 'Go to gym',
        completed: true
    },
    {
        text: 'Cook some food for tomorrow',
        completed: true
    },

]



const sortTodo = function(myTodos){
   const sortedTodo =  myTodos.sort(function(a,b){
        if(! a.completed  && b.completed){
                return -1
        }else if(! b.completed  && a.completed){
            return 1

        } else{
            return 0
        }


    })
    return sortedTodo
}

const sorted = sortTodo(myTodos)
console.log(sorted)

// const findNote = function(myTodos){

//     return myTodos.filter(function(myTodo){
//         return !myTodo.completed 

//     })
    


// }
// console.log(findNote(myTodos))



// Challenge 2

// const searchedIndex = function (myTodos, searchedTitle) {

//     const index =  myTodos.findIndex(function (todo, index) {
//         return todo.text.toLowerCase() === searchedTitle.toLowerCase()

//     })
//     return index

// }


// console.log(myTodos)
// const deleteTodo = function (myTodos, deleted) {

//         const index = myTodos.findIndex(function (todo) {
//             return todo.text.toLowerCase() === deleted.toLowerCase()

//         })
//         if (index > -1) {
//             myTodos.splice(index, 1)
            
//         }
    

// }

// deleteTodo(myTodos, 'study geometry')
// console.log(myTodos)





















// /*challenge area*/
// /* splice : start at, remove...if 0 = remove nothing but provide new item after ,  */
// // myTodos.splice(2,1)
// // myTodos.push('added new to end')
// // myTodos.shift()
// // myTodos.unshift('begin homework')
// // myTodos.splice(2,0, 'spliced at 2')
// // myTodos.splice(1,1)
// // myTodos.splice(1,1, 'spliced 3')

// // console.log(`first item is : ` + myTodos[0])
// // console.log(`seconed  item is : ` + myTodos[1])



// // myTodos.forEach(function (item, index) {
// //     const num = index + 1
// //     console.log(`${num} - ${item}`)

// // })

// console.log(myTodos.length)
// for (let index = myTodos.length - 1; index >= 0; index--) {
//     let item = myTodos[index]
//     console.log(item)

// }

// for (let index = 10; index > 0; index--) {
//     console.log(index)

// }

// // challenge
// console.log(`challenge:`)
// for (let index = 0; index < myTodos.length; index++) {
//     const count = index + 1
//     console.log(`${count} - ${myTodos[index]}`)

// }






// // myTodos.splice(1, 2)
// // myTodos.splice(1, 0, 'a new item')
// // myTodos.splice(1, 1, 'alternative item')

// // myTodos.push(12)
// // myTodos.pop()
// // myTodos.shift()
// // myTodos.unshift('clean floor')
// //template string
// // console.log(`Hello,  You have : ${myTodos.length} Todos,
// // Your first todo: ${myTodos[0]}, seconed : ${myTodos[1]},
// // Last one is: ${myTodos[3]}`)
// // console.log(myTodos)