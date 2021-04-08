let a = [ 2, 3, 4, 5, 6]
let i = 0

for (; i < a.length ; i++ ){
    console.log(a[i])
}

while (i < a.length){
    console.log(a[i])
    i++
}
i = 0
do {
    console.log(a[i])
    i++
} while (i < a.length)

for (i in a){       // for in returneaza indexul
    console.log(a[i])
}

for (i of a){       // for of returneaza elementul
    console.log(i)
}

a.forEach((i)=>{
    console.log(i)
})

a.map((i)=>{
    console.log(i)
})

