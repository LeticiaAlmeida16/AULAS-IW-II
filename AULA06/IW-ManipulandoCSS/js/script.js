let titulo = document.querySelector('h1')
titulo.textContent = 'Manipulando CSS com JS'
//titulo.innerHTML = 'Aula Manipular CSS'
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'img/gray.png')
imagem.setAttribute('width', '280px')

/* MANIPULAR CSS */
document.querySelector('h1').style.color = "white";
titulo.style.color = "white";
titulo.style.backgroundColor = "black";
titulo.style.padding = "0.7rem";
titulo.style.borderRadius = "29px";

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
    imagem.src = 'img/black.png'
    nomecor.textContent = 'black cat'
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
    imagem.src = 'img/white.jpg'
    nomecor.textContent = 'smile :)'
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
    imagem.src = 'img/pink.png'
    nomecor.textContent = 'pink bow'
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
    imagem.src = 'img/blue.png'
    nomecor.textContent = 'seabed'
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
    imagem.src = 'img/yellow.png'
    nomecor.textContent = 'butterfly + sunflower'
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
    imagem.src = 'img/red.png'
    nomecor.textContent = 'heart <3'
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
    imagem.src = 'img/green.png'
    nomecor.textContent = 'stars'
}
