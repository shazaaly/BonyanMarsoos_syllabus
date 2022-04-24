const add = () => {
    return  arguments[0] + arguments [1]
}


// console.log(add(1,5,8,7,2))

const car = {
    color : 'Red',
    getSummary(){
        return `this car is ${ this.color}`
    }
}

console.log(car.getSummary())