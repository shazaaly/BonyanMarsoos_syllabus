
let restaurant = {
    resName: 'TBS',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        //   console.log(this)
        let seetsAvail = this.guestCapacity - this.guestCount
        return partySize <= seetsAvail 

    },

    seatParty : function(partySize){
        return this.guestCount =  partySize + this.guestCount
    },

    removeParty: function(leavingSize){
        return this.guestCount - leavingSize

    }


}

let avail = restaurant.checkAvailability(10)
let latestCount = restaurant.seatParty(50)
let afterLeft = restaurant.removeParty(5)

console.log(avail)
console.log(latestCount)
console.log(afterLeft)
