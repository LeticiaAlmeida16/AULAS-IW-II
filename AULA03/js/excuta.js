var result = document.getElementById('result')

function pegaNome(){
    var nome = document.getElementById('nome').value
    result.innerHTML = "Vamos começar, " + nome + "!"
    botao.innerHTML = "Ok!"
}

function somaPega(){
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var soma = num1 + num2
    resultConta.innerHTML = soma
}
function subPega(){
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var sub = num1 - num2
    resultConta.innerHTML = sub
}
function multPega(){
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var mult = num1 * num2
    resultConta.innerHTML = mult
}
function diviPega(){
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var divi = num1 / num2
    resultConta.innerHTML = divi
}
function limpaPega(){
    var num1 = document.getElementById('num1')
    var num2 = document.getElementById('num2')
    num1.value = ""
    num2.value = ""
    resultConta.innerHTML = "0"
}
