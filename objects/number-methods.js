// let num = 106.2675
// console.log(num)
// console.log(num.toFixed(2))
// //math
// console.log(Math.round(num))
// console.log(Math.pow(num, 2))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))

// console.log(Math.random())  //generate from 0 and 1
// let min =10
// let max = 20
// let randNum = Math.floor(Math.random() * (max - min ) + 10)

// console.log(randNum)

//challenge area:
//take a guess as a single argument , generate a random no true if correct

let min =9
let max = 12
let makeGuess = function(num){
    let random = Math.round(Math.random() * (max - min) + min)
    console.log(random)

     return random === num

}

let checker = makeGuess(10)
console.log(checker)



