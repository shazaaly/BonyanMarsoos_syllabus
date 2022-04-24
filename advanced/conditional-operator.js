const age = 10
const message = age > 17 ? 'You can vote' : 'You can Not  vote'

// age > 17 ?  message = 'You can vote' : message = 'You can Not  vote'

console.log(message)

//example 2 running one of 2 functions according to age



const myAge = 29

const showPage = () => {
    return 'show page'
}

const showErrorPage = () => {
    return'show error page'
}

let print = console.log( myAge >= 21 ? showPage() : showErrorPage() )

//team challenge

const team =['ahmed', 'Ehab', 'Cerg', 'Shaza']

console.log (team.length <= 4 ? `Team size : ${team.length}` : 'You ve got too many ppl in ur team')
