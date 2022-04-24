
const getLocation = async () => {
    const response = await fetch(`//ipinfo.io/json?token=5769c876a42ecf`)

    if (response.status === 200) {
        return response.json()

    } else {
        throw new Error(`Error fetching location!`)
    }


}



  const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        let data = await response.json()
        return data.puzzle

    } else {
        throw new Error(`Error fetching!`)
    }



}





const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountryDetails(location.country)
    return country


}


const getCountryDetails = async (countryCode) => {
    const response = await fetch(`//restcountries.com/v3.1/alpha/${countryCode}`)
    if (response.status === 200) {
        let data = await response.json()
        const countryData = data.find((country) => country.cca2 === countryCode)
        return countryData.name.official

    } else {
        throw new Error('Error fetching country')
    }


}

export{getPuzzle as default} 