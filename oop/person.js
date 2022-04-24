//Prototypal Chain:
//myPerson-> Person.prototype -> Obj.prototype ->null
class Person {
    constructor(firstname, lastName, age, likes = []) {
        this.firstname = firstname
        this.lastName = lastName
        this.age = age
        this.likes = likes

    }

    getBio() {
        let bio = `${this.firstname} is ${this.age} years old.`
        this.likes.forEach((like) => {
            bio += `  hobbies : ${this.firstname} likes ${like}`

        })

        return bio

    }

    set fullname(fullname) {
        const names = fullname.split(' ')
        this.firstname = names[0]
        this.lastName = names[1]


    }


}

class Employee extends Person {
    constructor(firstname, lastName, age, likes, position) {
        super(firstname, lastName, age, likes)
        this.position = position


    }

    getBio() {
        return ` ${this.fullname} is a ${this.position}`
    }

    get fullname(){
        return `${this.firstname} ${this.lastName}`
    }

    getYearsLeft() {
        return 65 - this.age
        // return` Remaining years : ${remainingYears}`

    }

}

class Student extends Person {
    constructor(firstname, lastName, age, likes, grade) {
        super(firstname, lastName, age, likes)
        this.grade = grade
    }

   

    updateGrade(change) {
        //change is -20 for example
       return this.grade += change


    }
    passingMessage(grade) {
        if (grade > 70 && grade < 100) {
            return `${this.firstname} is passing the class`

        } else {
            return `${this.firstname} is failing the class`


        }
    }
    getBio(){
        const status= this.grade >= 70 ? `Pass` : `Fail`
        return` ${ this.firstname} Grade is :${this.grade} -  Status : ${status}`
    }

}
const st1 = new Student('Shaza', 'Ali', 18, [], 80)
st1.fullname = 'Hussein Shaker'
st1.updateGrade(-5)
console.log(st1.getBio())



const emp1 = new Employee('employeeName', 'lastName' , 50, [], 'Manager')
console.log(emp1.getBio())





















// console.log(st1.passingMessage(80))
// console.log(st1.updateGrade(5, 80, '+'))


// const myPerson = new PersonClass('Ahmed', 'Mahmoud', 25, ['Reading'])
// console.log(myPerson.setName('Ahmed Mahmoud'))


// const Person = function (firstname, lastName, age, likes = []) {
//     this.firstname = firstname
//     this.lastName = lastName
//     this.age = age
//     this.likes = likes


// }

// Person.prototype.getBio = function () {
//     let bio = `${this.firstname} is ${this.age} years old.`
//     this.likes.forEach((like) => {
//         bio += `  hobbies : ${this.firstname} likes ${like}`

//     })

//     return bio

// }

// Person.prototype.setName = function (fullname) {
//     const names = fullname.split(' ')
//     this.firstname = names[0]
//     this.lastName = names[1]


// }




