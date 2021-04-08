let number = prompt('Take a number')
let array = []
const dividers = () => {
    let  count = number
    while (count > 0){
        if (number%count ===0 ){
            console.log(count)
            array.push(count)
        }
        count--
    }
    console.log(array)
}
dividers()