
require("@babel/polyfill");
import "@babel/polyfill";

import "core-js/stable";
import "regenerator-runtime/runtime";


import Hangman from'./hangman'
import getPuzzle from'./requests'




let game1
const game2 = new Hangman('Green Land', 3)

const puzzleEl = this.document.querySelector('#puzzle')
const guessEl = this.document.querySelector('#guesses')


window.addEventListener('keypress', function (e) {
    const guess = e.key
    game1.makeGuess(guess)
    render()

})


const render = () => {
    puzzleEl.innerHTML = ''
    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)

    });
    // puzzleEl.textContent =game1.puzzle
    guessEl.textContent = game1.statusMessage

}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)
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

