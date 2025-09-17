const resultado = document.getElementById('resultado')

function Ejercicio1(){
    let nombre = document.getElementById('nombre').value
    let fecha = document.getElementById('nombre').value
    let edad = CalcularEdad(numero)
    resultado.textContent = `Hola, tu nombre es ${nombre} y tenes ${edad} años.`
    console.log(resultado.textContent)
}


function Ejercicio2(nombre, fechaNum){
    let edad = CalcularEdad(fechaNum)
    resultado = `Hola, tu nombre es ${nombre} y tenes ${edad} años.`
}