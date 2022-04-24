
//Tipper Challenge:

const createTipper = (tip) => {

    return (billAmount) => {
        return tip * billAmount

    }

}

const tenPercentTip =createTipper(0.1)
console.log(tenPercentTip(1000))

const twentyPercentTip =createTipper(0.2)
console.log(twentyPercentTip(1000))
















//Ex 2 : use a closure to create a way to have a private variable in JavaScript, a variable that's only accessible or modifiable via a very specific set of rules.

const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },

        decrement() {
            count--
        },

        get() {
            return count
        }
    }

}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

//Ex 3: Adder:

const createAdder = (a) => {
    return (b) => {
        return a + b

    }
}

const addFour = createAdder(4)
console.log(addFour((5)))

const theHundredAdder = createAdder(100)
console.log(theHundredAdder((5)))



// Closure ex1 :

// const myFunc = () => {
//     const message = 'This is amessage'

//     const printMessage = () => {
//         console.log(message)
//     }
//     // instead of callig printMessage() we return it :
//     return printMessage
// }

// const myprintMessage = myFunc()
// myprintMessage()

