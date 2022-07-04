const direito = document.querySelector('.direitos')

function invisible(){
    direito.removeAttribute('class')
    direito.setAttribute('class', 'invisible')
}

const buttonTop = document.querySelector('.top')  


function scrollBar(){

    let valor = scrollY

    if (valor == 0){
        buttonTop.toggleAttribute('class')
        buttonTop.setAttribute('class', 'invisible')
    }
    else{
        buttonTop.setAttribute('class', 'top')
    }
}

function callRelogio( ) {
    setInterval(relogio, 500)
}

const divTempo = document.querySelector('.time')

function relogio() {
    const data = new Date()

    let hour = data.getHours()
    let minute = data.getMinutes()
    let seconds = data.getSeconds()

    let tempo = hour + ":" + minute + ":" + seconds

    divTempo.innerHTML = tempo

}

const buttonClose = document.querySelector('.fechar')

divTempo.setAttribute('class', 'invisible')
buttonClose.setAttribute('class', 'invisible')

function exibeRelogio(){
    divTempo.toggleAttribute('class')
    divTempo.setAttribute('class', 'time')
    buttonClose.toggleAttribute('class')
    buttonClose.setAttribute('class', 'fechar')
}

function fechar() {
    divTempo.toggleAttribute('class')
    divTempo.setAttribute('class', 'invisible')
    buttonClose.toggleAttribute('class')
    buttonClose.setAttribute('class', 'invisible')
}
