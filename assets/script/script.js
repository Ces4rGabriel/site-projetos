
function verificarCheckBox() {
    let bntCheck = document.getElementsByName("bntCheck"); 

    for (let i=0;i<bntCheck.length;i++){ 
        if (bntCheck[i].checked == true){ 
            // CheckBox Marcado... Faça alguma coisa...
            console.log('is checked')
        }  else {
           // CheckBox Não Marcado... Faça alguma outra coisa...
           console.log('is not checked')
        }
    }
}

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
