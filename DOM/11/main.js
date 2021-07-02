document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = 'darkgrey'

    const table = document.createElement('table')

    createTable(['Name', 'X'], table)
    addTable([], table)

    table.addEventListener('click', (event) => {
        addTable(['test','test'], table, event)
        removeTable(event, table)
    })

    document.body.appendChild(table)

})

function addTable (options, table, event) {
    const tr = document.createElement('tr')

    options.forEach((element) => {
        const th = document.createElement('th')
        const thText = document.createTextNode(`${element}`)

        table.appendChild(tr).appendChild(th).appendChild(thText)
    })
}

function createTable (options, table) {
    const tr = document.createElement('tr')

    options.forEach((element) => {
        const th = document.createElement('th')
        const thText = document.createTextNode(`${element}`)

        table.appendChild(tr).appendChild(th).appendChild(thText)
    })


}
//
//
// function addElement(event, table) {
//     createTable(['Name', 'value'], table)
// }
//
function removeTable(event, table) {

}