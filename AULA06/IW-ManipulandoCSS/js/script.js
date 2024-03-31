/* Arquivo JS + alterar CSS */

let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 Manipular CSS'
//titulo.innerHTML = 'Aula Manipular CSS'
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'img/pride-fc.jpg')
imagem.setAttribute('width', '280px')

/* MANIPULAR CSS */
document.querySelector('h1').style.color = "red";
titulo.style.color = "red";
titulo.style.backgroundColor = "#000";
titulo.style.borderBottom = "2px solid red";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius = "5px";

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'escura')
box[0].removeAttribute('class')

/////// MODOS DE COR ///////
let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')

let btnpink = document.querySelector('#btpink')

let btnblue = document.querySelector('#btblue')

let btnyellow = document.querySelector('#btyellow')

let btnred = document.querySelector('#btred')

let btngreen = document.querySelector('#btgreen')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)
btnpink.addEventListener('click', modopink)
btnblue.addEventListener('click', modoblue)
btnyellow.addEventListener('click', modoyellow)
btnred.addEventListener('click', modored)
btngreen.addEventListener('click', modogreen)

function modoDark() {
    event.preventDefault();
    console.log('modo dark')
    tela.classList.add("dark");
    tela.classList.remove("light");
    tela.classList.remove("pink");
    tela.classList.remove("blue");
    tela.classList.remove("yellow");
    tela.classList.remove("red");
    tela.classList.remove("green");
}

function modoLight() {
    event.preventDefault();
    console.log('modo light')
    tela.classList.remove("dark");
    tela.classList.remove("pink");
    tela.classList.remove("blue");
    tela.classList.remove("yellow");
    tela.classList.add("light");
    tela.classList.remove("red");
    tela.classList.remove("green");
}

function modopink() {
    event.preventDefault();
    console.log('modo pink')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("blue");
    tela.classList.remove("yellow");
    tela.classList.add("pink");
    tela.classList.remove("red");
    tela.classList.remove("green");
}

function modoblue() {
    event.preventDefault();
    console.log('modo blue')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("pink");
    tela.classList.remove("yellow");
    tela.classList.add("blue");
    tela.classList.remove("red");
    tela.classList.remove("green");
}
function modoyellow() {
    event.preventDefault();
    console.log('modo yellow')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("pink");
    tela.classList.remove("blue");
    tela.classList.add("yellow");
    tela.classList.remove("red");
    tela.classList.remove("green");
}
function modored() {
    event.preventDefault();
    console.log('modo red')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("pink");
    tela.classList.remove("blue");
    tela.classList.remove("yellow");
    tela.classList.remove("green");
    tela.classList.add("red");
}
function modogreen() {
    event.preventDefault();
    console.log('modo green')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("pink");
    tela.classList.remove("blue");
    tela.classList.remove("yellow");
    tela.classList.remove("red");
    tela.classList.add("green");
}


/*
titulo.addEventListener('click', mudarId)
function mudarId() {
    titulo.id = 'titulo'
    console.log(titulo.id)
}
*/
