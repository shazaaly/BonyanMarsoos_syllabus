let temp = 6

if (temp >= 65 && temp < 90) {
    console.log('It is pretty nice outside!')

} else if (temp <= 0 || temp > 120) {
    console.log('Do not go outside!')
} else {
    console.log('It is Ok, Do what you want!')
}

//Challenge Here: 
let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer vegan dishes!')

} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer up some vegan dishes!')

} else {
    console.log(' offerany dish from menu!')
}