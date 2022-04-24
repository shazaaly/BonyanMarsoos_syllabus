let myBook = {
    title: '1984',
    auther: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'USA history',
    auther: 'Howard Zinn',
    pageCount: 726
}

//print summary by using function than take an obj as an arg:

let summary = function (book) {
    console.log(`${book.title} by ${book.auther}`)

}

summary(myBook)
summary(otherBook)


//return an obj by fn

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.auther}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages`

    }

}
let bookSummary = getSummary(otherBook)
console.log(bookSummary.pageCountSummary)

// challenge area 


let converter = function (fah) {

    return {
        fah: fah,
        celesius: fah + 459 * 5 / 9,
        kelvin: 273.15 + (fah - 32) * 5 / 9
    }

}

let tempConv = converter(150)
console.log(tempConv)