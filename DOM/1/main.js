document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button')

    document.body.style.backgroundColor = 'darkred'

    button.addEventListener('click', () => {
        document.body.style.backgroundColor = 'darkorange'
    })
    
    makeBlue()
    modifyOl()
})

function makeBlue() {
    setTimeout(() => {
        document.body.style.backgroundColor = 'gray'
    }, 3000)
}

function modifyOl() {

    let count = 0

    setInterval(() => {
        if (count <= 20) {

            const ol = document.getElementById('ol')
            const li = document.createElement('li')

            if (count % 2 === 0) {
                li.style.backgroundColor = 'darkgray'
            } else {
                li.style.backgroundColor = 'gray'
            }

            li.appendChild(document.createTextNode(`${count}`))
            ol.appendChild(li)
            count++
        }
    }, 500)

}
