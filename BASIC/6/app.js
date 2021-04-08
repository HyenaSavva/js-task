let num = prompt('Introduce number:')

//const num = Number(prompt('Introduce number: '))

num = parseInt(num)

let result
if (num > 0){
    result = '1'
} else if (num < 0 ){
    result = '-1'
}else if (num === 0){
    result = '0'
} else {
    result = 'Error'
}
alert(result)

