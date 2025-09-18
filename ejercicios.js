const resultado = document.getElementById('resultado')
const frutas = ["pera", "banana", "crotolamo", "naranja", "zandia", "olmo", "melon", "pomelo", "kiwi", "arandano"]

function clearCons(){
    console.clear();
    resultado.textContent = ""
}
function Ejercicio1(){
    let nombre = document.getElementById('nombre').value
    let fecha = document.getElementById('nombre').value
    let edad = CalcularEdad(numero)
    resultado.textContent = `Hola, tu nombre es ${nombre} y tenes ${edad} años.`
    console.log(resultado.textContent)
}


function Ejercicio2(){
    for(const fruta of frutas){
        console.log(`Acaso la/el ${fruta} es tu frutita faborita`)
    }
    const frutta = prompt("Que fruta desea estimade")
    if (frutas.includes(frutta)){
        resultado.textContent = `Perfecto bro, poseemos esa frutita ${frutta} en nuestro almacen, ahora te la traigo babe`
        console.log("Si")
    }
    else{
        resultado.textContent = `Ough, lo lamento, no poseemos tu frutita ${frutta}, pronto la conseguire`
        console.log("So")
    }
}

function Ejercicio3(){
    const dos = (10 == '10')
    const tres = (10 === '10') 
    console.log(dos ? "Sip, 10 es == a '10' " : "Nop, 10 no es == a '10' ")
    console.log(tres ? "Sip, 10 es === a '10' " : "Nop, 10 no es === a '10' ")
    console.log(`el tipo de dato de 10.6 es ${typeof 10.6}`)
    console.log(true == 1)
}