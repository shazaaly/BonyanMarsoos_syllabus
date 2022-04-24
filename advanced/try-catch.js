
const getTip = (amount) => {
    if ( typeof(amount) === 'number') {
        return amount * 0.25

    } else{ 
        throw Error('Argument Must Be a Number')
    }
}

try {
    const result = getTip(150)
    console.log(result)


} catch (error) {
    console.log('catch block!')

}

