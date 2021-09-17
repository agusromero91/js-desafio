function correr(){
    let nombre = prompt("Nombre y Apellido:");
    let cantManzanas = prompt("Cantidad de Manzanas:");
    let cantNaranjas = prompt("Cantidad de Naranjas:");
    let cantPeras = prompt("Cantidad de Peras:");

    let costoManzanas = 10;
    let costoNaranjas = 50;
    let costoPeras = 20;

    let totalManzanas = cantManzanas*costoManzanas;
    let totalNaranjas = cantNaranjas*costoNaranjas;
    let totalPeras = cantPeras*costoPeras;

    let total = totalManzanas + totalNaranjas + totalPeras

    alert("Hola" + " " + nombre + "! " + "El costo de tu pedido es: $" + total);

  
}