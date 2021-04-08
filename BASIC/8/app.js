let username = prompt("Username: ")
let password = prompt("Password: ")

const user = "user"
const pass = "pass"

const verify = (username , password)=> {
    if (username === user && password === pass){
        console.log('Привет, совпадает username и password ')
    }else if (username === user && password !== pass){
        console.log('Неправильный пароль ')
    }else if (username !== user && password === pass){
        console.log('Неправильный username ')
    }else {
        console.log('Ошибка Валидации')
    }
}

verify(username , password)