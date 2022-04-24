
const data = {
    locations :[],
    get location() {
        return this._location

    },

    set location(value) {
              //can not store value in location  becoz : { location: [Getter/Setter] }
        this._location = value.trim()
        this.locations.push(this._location)
    }

}

data.location ='   Egypt'
data.location = 'Kwait'
console.log(data)  /*  =>     { location: [Getter/Setter], _location: 'Egypt' }  */

console.log(data)