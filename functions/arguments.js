let add = function (a, b) {
    return a + b

}

let result = add(5, 10)
console.log(result)

//default arguments

let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Player name: ${name} and score is: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

//Challenge area

let getTip = function (pillTotal, percent = 0.2) {
    return `Tips on this pill: ${pillTotal * percent} LE.`

}

let tips = getTip(40, 0.25)
console.log(tips)