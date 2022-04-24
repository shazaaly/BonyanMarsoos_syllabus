const square = (num) =>  num * num

const people = [
    {
        name : 'ShazaAli',
        age : '28'
    },
    {
        name : 'John Brad',
        age : '22'
    },
    {
        name : 'Ibrahim Mohammad',
        age : '30'
    }


]


const under30= people.filter((person) =>  person.age < 30)

// console.log(under30)

const ageFinder = people.find((person) => person.age == 22 )
console.log(ageFinder.name)

