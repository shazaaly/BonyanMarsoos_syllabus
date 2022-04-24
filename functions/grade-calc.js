
const totalScore = 20
let letterGrade = ''
const getGrade = (fname, score) => {
    const percent = score / totalScore * 100
    if (typeof score !== 'number') {
        throw Error('Score must be a num')

    } 
    
    
    if (percent >= 90) {
        letterGrade = 'A'

    } else if (percent >= 80) {
        letterGrade = 'B'

    } else if (percent >= 70) {
        letterGrade = 'C'

    } else if (percent >= 60) {
        letterGrade = 'D'

    } else {
        letterGrade = 'E'

    }

    return `Student: ${fname} score percent : ${percent}%   Grade : ${letterGrade}`


}
try {


    let studentResult = getGrade('Johny', 25)
    console.log(studentResult)

} catch (error) {
    console.log(error.message)

}

