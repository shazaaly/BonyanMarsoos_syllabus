
//Global scope
//let fname = 'Shaza'

if (true) {
//scope variable shadow over parent globalvariable
  //  let fname = 'Aly'
    if (true) {
        fname = 'reassigned var'
        console.log(fname)
    }

}

if (true) {
    console.log(fname)

}