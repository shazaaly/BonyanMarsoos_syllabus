let myAccount = {
    fname: 'Shaza Ali',
    expences: 0,
    income: 0
}

// let otherAccount = myAccount
// otherAccount.income = 1000
// otherAccount = {}

//Challenge
let addExpence = function (account, amount) {
    account.expences = account.expences + amount
}


let addIncome = function (account, income) {
    account.income = account.income + income
}

let getAccountSummary = function (account) {
    account.balance = account.income - account.expences
    return `Account for : ${account.fname} has a balance of : $ ${account.balance} expences : ${account.expences} and income ${account.income}`

}



addIncome(myAccount, 1000)
addExpence(myAccount, 400)
let accountSummary1 = getAccountSummary(myAccount)
console.log(accountSummary1)