/* let altura_original = document.getElementById('altura').innerHTML;
altura_nova = parseFloat(altura_nova);
let altura_nova = altura_original.replace(",",".");
document.getElementById('altura').innerHTML = altura_nova; */

/* function calcular(){
    var altura_original = document.getElementById('altura').value;
    var altura_nova = altura_original.replace(",",".");
    altura_nova = parseFloat(altura_nova);
    document.getElementById('altura').innerHTML = altura_nova;
} */

function calcular(){
    var peso = parseFloat(document.getElementById('peso').value)
    var altura = parseFloat(document.getElementById('altura').value)
    var calcular = peso / (altura * altura)
    resultIMC.innerHTML = calcular
}