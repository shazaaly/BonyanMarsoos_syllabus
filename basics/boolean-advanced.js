let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked) {  //if true : only  first block excuted
    console.log('Is Account Locked  ? ')

} else if (userRole === 'admin') {
    console.log('WELCOME ADMIN :)')

}

else {
    console.log('WELCOME !!!')

}

//Challenge Area

let temp = 5
if (temp <= 31) {
    console.log('Freezing outside ')

} else if (temp >= 110) {
    console.log('Hot outside ')

} else {
    console.log('Pretty outside ')

}