class Person {
    constructor(options) {
        this.name = options.name
        this.surname = options.surname
        this.rate = options.rate
        this.days = options.days
    }
    getSalary(){
        return this.rate * this.days
    }
    getName(){
        return this.name
    }
    setName(name){
        this.name = name
    }
    getSurname(){
        return this.surname
    }
    setSurname(surname){
        this.surname = surname
    }
    static getSalary (){
        return true
    }
}

const worker = new Person({name: 'Ivan', surname: 'Ivanov', rate: '30', days: '30'})

console.log(worker.name)
console.log(worker.surname)

worker.setName('hello')
console.log(worker.getName())
worker.setSurname('world')
console.log(worker.getSurname())
console.log(worker.getSalary())



