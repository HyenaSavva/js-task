const extractCurrencyValue = (str) =>{
    let sum , result = ''
    sum = str.split('')
    sum.forEach((elem)=>{
        if (!isNaN(elem)){
            result += elem
        }
    })
    return parseInt(result)
}
console.log(extractCurrencyValue('$120') === 120)