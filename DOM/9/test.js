document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = 'darkgray'

    const fixed = document.querySelector('.fixed')
    const player = document.querySelector('.player')
    createTable(10, 10, fixed)
    remoteController(player, fixed)

})

let border

function createTable(row, column, fixed) {
    border = [row][column]
    for (let i = 0; i < row; i++) {
        let rows =  createDiv(fixed, i)
        for (let j = 0; j < column; j++) {
            createBox(rows, j)
        }
    }
}

function createDiv(fixed, index){
    const row = document.createElement('div')
    row.setAttribute('class', 'row')
    row.setAttribute('id', `${index}`)
    return fixed.appendChild(row)
}

function createBox(row, index){
    const box = document.createElement('div')
    box.setAttribute('class', 'box')
    box.setAttribute('id', `${index}`)
    row.appendChild(box)
}

function remoteController(player, fixed){
    const newPlayer = document.body.replaceChild(player, player)
    document.addEventListener('keydown', (event) => {
        const row = document.querySelector('.row')
        console.log(row)
        switch (event.key) {
            case 'ArrowDown':
                fixed.appendChild(newPlayer)
                break
            case 'ArrowUp':

                break
            case 'ArrowLeft':

                break
            case 'ArrowRight':

                break
            default:
                console.log('nothing')
        }
    })
}