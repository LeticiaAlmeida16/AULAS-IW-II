const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lamp')

function quebrada(){
    return lampada.src.indexOf('quebrada') > -1
}
function lampLigada(){
    if(!quebrada()){
        lampada.src = "img/ligada.jpg"
    }
}
function lampDesligada(){
    if(!quebrada()){
        lampada.src = "img/desligada.jpg"
    }
}
function lampQuebrada(){
    lampada.src = "img/quebrada.jpg"
}


ligar.addEventListener('click',lampLigada)
desligar.addEventListener('click',lampDesligada)

lampada.addEventListener('mouseover', lampLigada)
lampada.addEventListener('mouseleave', lampDesligada)

lampada.addEventListener('dblclick', lampQuebrada)