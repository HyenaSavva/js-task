class Validator {
    static jsDate = new Date()

    constructor(options) {
        this.string = options.string

    }

    isEmail(string) {
        return Validator.isEmail(string)
    }

    static isEmail(string) {
        console.log('Is email :')
        return string.includes('@gmail.com')
    }

    isDate(date) {
        return Validator.isDate(date)
    }

    static isDate(date) {
        console.log('Date :', this.jsDate)
        return this.jsDate.toString().includes(date)
    }

    isPhone(data) {
        return Validator.isPhone(data)
    }

    static isPhone(string) {
        console.log('Is phone:')
        return string.includes('+373')
    }
    isDomain(data){
        return Validator.isDomain(data)
    }
    static isDomain(string) {
        console.log('Is domain:')
        return string.includes('https://')
    }
}

const validator = new Validator({string: 'string'})

console.log(validator.isEmail('hello@gmail.com'))
console.log(validator.isDate('31'))
console.log(validator.isPhone('+373999999'))
console.log(validator.isDomain('https://hello'))


