document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = 'darkgray'

    const elem2 = document.getElementById('elem2')
    elem2.innerHTML = '!'
    const elem = document.getElementById('elem')
    const firstChild = elem.firstElementChild
    firstChild.style.color = 'red'


    const button = document.querySelector('#button')
    const parent = document.querySelector('.parent')
    const input = document.querySelector('input')

    input.addEventListener('change', () => {
        if (isNaN(Number(input.value))){
            input.value = ''
        }
    })

    button.addEventListener('click', () => {
        console.log(parent.lastChild)
        parent.removeChild(parent.lastChild)
    })

    const div = document.querySelector('.element')
    div.addEventListener('click',(e) => {
        const element = e.target
        alert(`Height = ${element.clientHeight}\nWidth = ${element.clientWidth}`)
        element.style.width = element.style.width.slice(0, element.style.width.indexOf('px')) * 2 + 'px'
        element.style.height = element.style.height.slice(0, element.style.height.indexOf('px')) * 2 + 'px'
    })

})

