/* Api challenge*/
// get access token from ipinfo.io

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

// const getPuzzleOLd = (wordCount) => {
//     return fetch('http://puzzle.mead.io/puzzle?wordCount=${wordCount}').then((response) => {
//         if (response.status === 200) {
//             return response.json()

//         } else {
//             throw new Error('Error fetching data')
//         }
//     }).then((data) => {
//         return data.puzzle
//     })
// }



const getCurrentCountry = async() => {
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



    

    // return fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`).then((response) => {
    //     if (response.status === 200) {
    //         return response.json()

    //     } else {
    //         throw new Error('Error fetching country')
    //     }
    // }).then((data) => {
    //     const countryData = data.find((country) => country.cca2 === countryCode)
    //     return countryData.name.official

    // })
}
// const getCountryDetails = (countryCode) => new Promise((resolve, reject) => {

//     const countriesRequest = new XMLHttpRequest()

//     countriesRequest.addEventListener('readystatechange', (e) => {

//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)

//             const countryData = data.find((country) => country.cca2 === countryCode)
//             resolve(countryData.name.official)
//             // console.log(countryData.name.official)

//         } else if (e.target.readyState === 4) {
//             reject(error)

//         }

//     })

//     countriesRequest.open('GET', `https://restcountries.com/v3.1/alpha/${countryCode}`)
//     countriesRequest.send()

// })


// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             resolve(data.puzzle)
//         } else if (e.target.readyState === 4) {
//             reject('An error has taken place')
//         }
//     })

//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()
// })