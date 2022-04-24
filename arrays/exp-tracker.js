
const account = {
    name: 'Shaza Aly Othman',
    expences: [],
    incomes: [],
    incomeDetails : function(description, amount){
        this.incomes.push({
            description : description,
            amount:amount
        })

    },
    addExpences: function (description, amount) {
        this.expences.push({
            description: description,
            amount: amount

        })

    },

    getAccountSummary: function () {
        let totalExpences = 0
        let totalIncome = 0
        this.expences.forEach(function (expence) {
            totalExpences = expence.amount + totalExpences

        })

        this.incomes.forEach(function(income){
            totalIncome =  income.amount + totalIncome


        })
        let balance = totalIncome - totalExpences
        return `Account of ${account.name} has $${totalExpences} expences, Income = $${totalIncome} and balance now = $${balance}.`
    },

    
}

account.incomeDetails('job salary', 20255)
account.addExpences('Buy Coffee and lunch', 255)
console.log(account.getAccountSummary())