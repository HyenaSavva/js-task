document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = 'darkgrey'


    const parentLeft = document.getElementById('parent-left')
    const parentRight = document.getElementById('parent-right')
    const img = document.createElement('img')

    img.setAttribute('draggable', 'true')
    img.setAttribute('src', 'paimon.jpg')
    img.setAttribute('id', 'image')

    parentLeft.appendChild(img)

    img.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData("application", event.target.id)
    })

    parentRight.addEventListener('dragover', (event) => {
        event.preventDefault()
    })

    parentRight.addEventListener('drop',(event) => {
        let data = event.dataTransfer.getData("application")
        const date = document.getElementById(data)
        event.target.appendChild(date)
    })

    parentLeft.addEventListener('dragover', (event) => {
        event.preventDefault()
    })

    parentLeft.addEventListener('drop',(event) => {
        let data = event.dataTransfer.getData("application")
        const date = document.getElementById(data)
        event.target.appendChild(date)
    })
})
