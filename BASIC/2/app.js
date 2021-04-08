let a = [3 ,45]
let b = a[0]
let summ = 0

const interval = ()=> {
    while (b !== a[1]){
        if (!(b%2)){
            summ += b
        }
        b++
    }
    console.log(summ)
}
interval()
