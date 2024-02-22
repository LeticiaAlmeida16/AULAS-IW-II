const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lamp')
const inter = document.getElementById('inter')
const texto = document.getElementById('texto')

function quebrada(){
    return lampada.src.indexOf('quebrada') > -1
}

function unico (){
    return lampada.src.indexOf('desligada') > -1
}

function interruptor (){
    if(!quebrada()){
        if(!unico()){
        lampada.src = 'img/desligada.jpg'
        texto.innerHTML = 'A lâmpada está DESLIGADA'
      }
        else{
        lampada.src = 'img/ligada.jpg'
        texto.innerHTML = 'A lâmpada está LIGADA'
      }
    }
}

function lampLigada(){
    if(!quebrada()){
        lampada.src = "img/ligada.jpg"
        texto.innerHTML = 'A lâmpada está LIGADA'
    }
}

function lampDesligada(){
    if(!quebrada()){
        lampada.src = "img/desligada.jpg"
        texto.innerHTML = 'A lâmpada está DESLIGADA'
    }
}

function lampQuebrada(){
    lampada.src = "img/quebrada.jpg"
    texto.innerHTML = 'A lâmpada está QUEBRADA'
}


inter.addEventListener('click', interruptor )
ligar.addEventListener('click',lampLigada)
desligar.addEventListener('click',lampDesligada)

lampada.addEventListener('mouseover', lampLigada)
lampada.addEventListener('mouseleave', lampDesligada)

lampada.addEventListener('dblclick', lampQuebrada)
// estado.addEventListener('click', alteratxt)