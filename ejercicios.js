const resultado = document.getElementById('resultado')
const frutas = ["pera", "banana", "crotolamo", "naranja", "zandia", "olmo", "melon", "pomelo", "kiwi", "arandano"]
resultado.textContent = "Aca se veran sus resultados"


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
    const frutta = prompt("Que fruta desea estimado")
    if (frutas.includes(frutta)){
        resultado.textContent = `Perfecto, poseemos esa frutita ${frutta} en nuestro almacen, ahora te la traigo `
        console.log("Si")
    }
    else{
        resultado.textContent = `Ough, lo lamento, no poseemos la frutita ${frutta}, pronto la conseguiremos`
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
    resultado.textContent = "Mire la consola"
}
function Ejercicio4() {
    const ciudad = {
        Nombre: prompt("Ingrese el nombre de su ciudad"),
        Poblacion: prompt("Ingrese la poblacion de su ciudad"),
        FechaDeFundacion: prompt("Ingrese la fecha de fundacion de su ciudad"),
        Extension: prompt("Ingrese la extension de su ciudad")
    };

    resultado.innerHTML = "Estos son los atributos de su ciudad:<br>";
    for (const atributo in ciudad) {
        resultado.innerHTML += `${atributo}: ${ciudad[atributo]}<br>`;
    }
}
function  Ejercicio5(){
    const juntos = document.getElementById('numeros').value;
    const separados = juntos.split(',')   
    const dobles = separados.map(n => n * 2);
    console.log(dobles)
    resultado.innerHTML = dobles;
}
function Ejercicio6A(){
    filas = prompt("¿De cuantas filas quiere su piramide de asteriscos?")
    if(!isNaN(filas) && filas > 0){
    let resultadoTexto = "";
    for (let i = 1; i <= filas; i++) {
        resultadoTexto += "*".repeat(i) + "\n";
    }
    resultado.textContent = resultadoTexto;  
    }
    else{
        resultado.textContent = "Por favor, ingrese un número válido.";
        return;
    }

}
function Ejercicio6B(){
    filas = prompt("¿De cuantas filas quiere su piramide de asteriscos?")
    if(!isNaN(filas) && filas > 0){
        let resultadoTexto = "";
        for (let i = 1; i <= filas; i++) {
            const espacios = "-".repeat(filas - i);
            const asteriscos = "*".repeat(2 * i - 1);
            const espacios2 = "-".repeat(filas - i);
            resultadoTexto += espacios + asteriscos + espacios2 + "\n";
        }
        resultado.textContent = resultadoTexto; 
    } 
    else{
        resultado.textContent = "Por favor, ingrese un número válido.";
        return;
    }

}

function Ejercicio7(){
    const input = document.getElementById('Noms').value;
    const separados = input.split(',')
    const elegidos = elegirNombresConA(separados)
    resultado.textContent = elegidos.join(', ')
}
function Ejercicio8(){
    const text = document.getElementById('cadtxt').value;
    const busc = document.getElementById('buscarP').value;
    const reemp = document.getElementById('reemplazarP').value;
    const resultado = reemplazarTexto(text, busc, reemp);
    resultado.textContent = resultado;
}

function Ejercicio9(){
    const txt = document.getElementById('txt').value;
    const cant = parseInt(document.getElementById('cant').value);
    const resultado = cortarTexto(txt, cant);
    resultado.textContent = resultado;
}
function Ejercicio10(){
    const input = prompt("Ingrese una serie de elementos separados por una coma")
    const separados2 = input.split(',')
    const guion = separados2.join(' - ');
    console.log(guion)
    resultado.textContent = guion
}
function Ejercicio11(){
    const input = document.getElementById('pedidos').value;
    const pedido = input.split(',').map(p => p.trim());
    const tot = calcularTotal(pedido);
    resultado.textContent = `RECAUDACION TOTAL: $${tot.toFixed(2)}`;
     
  
}