document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = 'gray'

    const tbody = document.createElement('tbody')
    const table = document.querySelector('table')

    matrices(table, tbody)

})

function matrices(table, tbody) {

    for (let i = 0; i < 8; i++) {
        const tr = document.createElement('tr')

        for (let j = 0; j < 8; j++) {
            const td = document.createElement('td')

            tr.appendChild(td)
            td.appendChild(document.createTextNode(' ' + i + j))

            if (i % 2 === j % 2) {
                td.style.backgroundColor = 'white'
            } else {
                td.style.backgroundColor = 'black'
            }
        }
        tbody.appendChild(tr)
    }
    table.append(tbody)


    // const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
    // const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    //
    // for (const number of numbers) {
    //     for (const letter of letters) {
    //         console.log(letter,number)
    //     }
    // }
}
