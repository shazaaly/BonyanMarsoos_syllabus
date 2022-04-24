

let greatUser = function () {
    console.log('Welcome User')
}

greatUser()

let square = function(x){
    let result = x*x
    return result
}
let value = square(8)
let value2 = square(10)
console.log(value)
console.log(value2)

//challenge area:
let convert= function (fahrenheit) {
    let celesius = (fahrenheit - 32) * 5 / 9    
    return celesius
    
}

let celdegree1 = convert(32)
let celdegree2 = convert(68)
console.log(celdegree1)
console.log(celdegree2)