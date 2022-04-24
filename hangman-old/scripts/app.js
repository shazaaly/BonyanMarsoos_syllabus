let game1 
const game2 = new Hangman('Green Land', 3)

const puzzleEl = this.document.querySelector('#puzzle')
const guessEl = this.document.querySelector('#guesses')


window.addEventListener('keypress', function (e) {
    const guess = e.key
    game1.makeGuess(guess)
    render()
  
})


const render = ()=>{
    puzzleEl.innerHTML = ''
    game1.puzzle.split('').forEach((letter) =>{
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)

    });
    // puzzleEl.textContent =game1.puzzle
    guessEl.textContent = game1.statusMessage

}

const startGame = async ()=> {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle , 5)
    render()
}

document.querySelector('#reset').addEventListener('click' ,startGame)
startGame()



//fetch Api with promises:

fetch('https://puzzle.mead.io/puzzle', {}).then((response) => {
    if (response.status === 200) {
        return response.json()

    } else {
        throw new Error('Response Failed')
    }

}).then((data) => {
    console.log(data.puzzle)

}).catch((err) => {
    console.log(err)

})



// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(err)
// })




getLocation().then((data) => {
    // console.log(data)
    return data.country
    // console.log(` You Are Currently In:   Country : ${data.country} Origin: ${data.region} - City:  ${data.city}`)
}).then((data) => {
    getCountryDetails(data).then((countryData) => {
        console.log(countryData)
    })

}).catch((err) => {
    console.log(err)
})



getCurrentCountry().then((country) => {
    console.log(country)
}).catch((err) => {
    console.log(err)

})




//making HTTP request:


//Challenge:

// const countriesRequest = new XMLHttpRequest()
// const countryCode = "EG"
// countriesRequest.addEventListener('readystatechange', (e) => {

//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)

//         const countryData = data.find((country) => country.cca2 === countryCode)
//         console.log(countryData.name.official)

//     } else if (e.target.readyState === 4) {
//         console.log('Error !!')

//     }

// })

// countriesRequest.open('GET', 'https://restcountries.com/v3.1/all')
// countriesRequest.send()

// const product = 'Computer'
// const otherProduct = new String('mouse')



//object : myObject ->  object.prototype -> null
//Array : myArray ->  Array.prototype ->Object.prototype ->null
//Function : myFunc->  Function.prototype ->Object.prototype ->null
//String conversion process from "primitive" : myString->  String.prototype ->Object.prototype ->null



// const team = ['Shaza', 'Medo']
// const team = new Array(['Shaza', 'Medo'])
// console.log(team.hasOwnProperty('length'))


/*Literal Syntax
const product = {
    name: 'Influence'
}
*/

// const product = new Object({
//     name : 'Influence'
// })

// Object.prototype.newMethod = () => `new Method`


// console.log(product.newMethod())