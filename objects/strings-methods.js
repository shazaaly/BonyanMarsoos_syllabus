let fname = '   Shaza Aly   '
//length:
console.log(fname.length)
console.log(fname.toUpperCase())
console.log(fname.toLowerCase())
console.log(fname.includes('Aly'))   //true
console.log(fname.trim())  //removes spaces from start and end

//challenge area:

//isValidPass
//true if length is 8 and no word password : true/false

let checker = function (pass) {
    return pass.length >= 8 && ! pass.includes('password')

}
console.log(checker('edpassword'))
console.log(checker('rte'))
console.log(checker('shazahhbjh12'))





