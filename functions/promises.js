
//callback
const getDataCallback = (callback) => {

    setTimeout(() => {
        callback(undefined, 'Time is out!')
    }, 2000)


}

getDataCallback((error, data) => {
    if (error) {
        console.log(`Error here :   ${error}`)

    } else {
        console.log(data)
    }
})

//Promise

const createPromise = (data) => new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(` My Data to be shown : ${data}`)
    }, 2000)
})

const myPromise = createPromise(123)

myPromise.then((data) => {
    console.log(data)

}, (error) => {
    console.log(error)

})

/*Promise chaining ex : */

const getCallback = (num) => new Promise((resolve, reject) => {

    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject(`Please add avalid Number`)

    }, 2000)

})

//getcall.9then: return) .then 
getCallback(10).then((data) => {
    return getCallback(data)

}).then((data) => {

    return getCallback(data)
}).then((data) => {

    console.log(data)
}).catch( (err)=>{
    console.log(err)

})