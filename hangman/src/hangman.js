class Hangman {

    constructor(word, remainingGuesses, status) {
        this.word = word.toLowerCase().split('')   //split => array of separate letters
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []  /*start as empty array*/
        this.status = 'Playing'

    }
    calcStatus() {
        let finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.remainingGuesses === 0) {
            this.status = 'Failed'

        } else if (finished) {
            this.status = 'Finished'

        } else {
            this.status = 'Playing'

        }

    }
    get statusMessage() {
        if (this.status == 'Playing') {
            return ` Guesses Left : ${this.remainingGuesses}`
        } else if (this.status == 'Failed') {
            return ` No Guesses Left, Hard Luck!, the word was "${this.word.join('')}" `

        } else {
            return `Well done!`
        }
    }

    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        //*  return nothing  by default will return undefined and prevent the rest of the function from running.

        if (this.status !== 'Playing') {
            return

        }


        if (isUnique) {

            this.guessedLetters.push(guess)

        }
        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }


        this.calcStatus()


    }
    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            //check if this letter is one of guessedLetters
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter

            } else {
                puzzle += '*'

            }

        })
        return puzzle


    }




}

export{Hangman as default}