//Calculo de costo total segun cantidad de pedidos solicitados

let producto1 = 1000;
let producto2 = 1200;
let producto3 = 2500;
let cant1 = 0;
let cant2 = 0;
let cant3 = 0;
let total;


let validar1= confirm("Desea contratar el servicio de Belleza de Manos?");
if(validar1){
    cant1= Number(prompt("Cantidad:"));
}

let validar2= confirm("Desea contratar el servicio de Belleza de Pies?");
if(validar2){
    cant2= Number(prompt("Cantidad:"));
}

let validar3= confirm("Desea contratar el servicio de Masaje Corporal?");
if(validar3){
    cant3= Number(prompt("Cantidad:"));
}

costoTotal(cant1, cant2, cant3);

//funciones
function costoTotal(a, b, c){
    total = producto1*a + producto2*b + producto3*c;
    mostrarResultado(total);
    return total; 
}

function mostrarResultado(z){
    console.log("El costo total de tu compra es: $" + z);
    alert(`El costo total de tu compra es: $ ${z}`);;
}

//COMPLEMENTARIO (3 funciones)
//1.ingresar cantidad de cuotas 2. calculo de cada cuota 3.mostrar valor de cada cuota 

let cuotas = prompt("Desea pagar en cuotas?");

while(cuotas != "si" && cuotas != "no"){
    cuotas = prompt("Desea pagar en cuotas?");
}

if(cuotas === "si"){
    let cantCuotas = Number(prompt("Indique la cantidad de cuotas (3 sin interes o 6 con 3% de recargo): "));

    calculoCuotas(cantCuotas);

}else if(cuotas === "no"){
    aplicarDescuento(total);
    
}else{
    alert("Se acepta como respuesta un si o un no");
}

//funcion 1

function calculoCuotas (x){

    let valorcuota;
    switch (x){
        case 3: valorCuota = total / x;
        break;
        case 6: valorCuota = (total + (total*0.03)) / x; 
        break; 
        default: valorCuota = "Valor ingresado invalido "
    }

    mostrarValor (valorCuota);
}

//funcion 2
function mostrarValor (y){
    console.log("El costo de cada cuota es:" + " " + y);
    alert(`El costo de cada cuota es: $ ${y}`);;
}

//funcion 3

function aplicarDescuento (p){
    descuento = p*0.9;
    alert(`Se le aplica un 10% de descuento, el nuevo total es: $ ${descuento}`);
    console.log("Se le aplica un 10% de descuento, el nuevo total es: $" + descuento);
    return descuento;
}