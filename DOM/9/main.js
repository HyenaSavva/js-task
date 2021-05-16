document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = 'darkgray'

    const fixed = document.querySelector('.fixed')
    const player = document.querySelector('.player')
    const player2 = document.querySelector('#player2')
    remoteController(player, fixed)
    remoteController(player2, fixed)

})

function remoteController(player, fixed) {
    document.addEventListener('keydown', (event) => {

        player.style.bottom += 0
        player.style.left += 0
        const playerStyleBottom = player.style.bottom.slice(0, player.style.bottom.indexOf('px'))
        const playerStyleLeft= player.style.left.slice(0, player.style.left.indexOf('px'))

        switch (event.key) {
            case 'ArrowDown':
                if (Number(playerStyleBottom) !== -Math.abs(fixed.clientWidth - 20)){
                    player.style.bottom = playerStyleBottom - 20 + 'px'
                }
                break
            case 'ArrowUp':
                if (Number(playerStyleBottom) !== 0) {
                    player.style.bottom = Number(playerStyleBottom) + 20 + 'px'
                }
                break
            case 'ArrowLeft':
                if (Number(playerStyleLeft) !== 0) {
                    player.style.left = playerStyleLeft - 20 + 'px'
                }
                break
            case 'ArrowRight':
                if (Number(playerStyleLeft) !== 180) {
                    player.style.left = Number(playerStyleLeft) + 20 + 'px'
                }
                break
        }
    })
}
