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
    return edad;
  
}