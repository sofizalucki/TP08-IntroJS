function CalcularEdad(fechaNum){
    const fechaNacimiento = new Date(fechaNum.value);
    const hoy = new Date();
    const mesActual = hoy.getMonth();
    const diaActual = hoy.getDate();
    const mesNacimiento = fechaNacimiento.getMonth();
    const diaNacimiento = fechaNacimiento.getDate();

    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
    }
    return edad
}

function elegirNombresConA(nombres) {
    return nombres.filter(nombre => nombre.trim().charAt(0).toUpperCase() === 'A');
}

function reemplazarTexto(text, busc, reemp) 
{
    const regex = new RegExp(busc, 'gi');
    return text.replace(regex, reemp);
}
  function cortarTexto(txt, cant) {
    return txt.slice(0, cant);
  }
   function calcularTotal(pedido) {
    return pedido.reduce((tot, pedido) => 
        {
      const part = pedido.split(':');
      return tot + parseFloat(part[1]);
    }, 0);
  }