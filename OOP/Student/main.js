class User {
    constructor(options) {
        this.name = options.name
        this.surname = options.surname
        this.year = options.year
    }
}

class Student extends User {
    constructor(options) {
        super(options)
    }
    getFullName() {
        return this.name + ' ' + this.surname
    }
    getCourse() {
        console.log('Nomer cursa:')
        return date.getFullYear() - this.year
    }
}

const user = new Student({name: 'Ivanushka', surname: 'Beloruskii', year: 2019})
const date = new Date()
console.log(user.getFullName())
console.log(user.getCourse())


