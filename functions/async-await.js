
const getCallback = (num) => new Promise((resolve, reject) => {

    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject(`Please add avalid Number`)

    }, 2000)

})

const processData = async() => {
    let data = await getCallback(2)
    data = await getCallback(data)
    return data
}

processData().then( (data)=> { 
    console.log(data)
}).catch( (err)=> {
    console.log(err)
    
})

