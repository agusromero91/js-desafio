//Lista de Servicios

class Service {
    constructor (sku, descripcion, precio, stock){
        this.sku = sku; 
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock; 
    }
}

let listaServicios = [];

listaServicios.push (new Service("1000", "masaje corporal", 2000, 3));
listaServicios.push (new Service("1001", "belleza de manos", 790, 5));
listaServicios.push (new Service("1002", "belleza de pies", 820, 5));

//Agregar servicio a la lista 
const agregarServicio = () => {
    let sku = prompt("SKU del servicio:");
    let descripcion = prompt("Descripción del servicio:");
    let precio = Number(prompt("Indique el precio del servicio:"));
    let stock = Number(prompt("Stock del servicio para la venta:"));
        
    let servicio = new Service(sku, descripcion, precio, stock);
    listaServicios.push(servicio);

    let validar = confirm("Desea agregar otro servicio? ");
    if(validar){
        agregarServicio();
    }

}   

//Busquedas segun requerimiento del usuario: 
let search = prompt("Que servicio desea buscar? ")
let buscador = listaServicios.filter(servicio => servicio.descripcion === search)
console.log(buscador); 


//Muestra por consola los servicios con precio menor a 1000 
let filtroPrecio = listaServicios.filter(servicio => servicio.precio < 1000);
console.log(filtroPrecio);


//Calculo de costo total segun cantidad de pedidos solicitados

let cant1 = 0;
let cant2 = 0;
let cant3 = 0;
let total;

let validar1= confirm("Desea contratar el servicio de Belleza de Manos?");
if(validar1){
    cant1= Number(prompt("Cantidad:"));
    if(cant1 > listaServicios[1].stock){
        console.log("No se puede realizar la compra");
        alert("No se puede realizar la compra")
    }else{
        listaServicios[1].stock = listaServicios[1].stock - cant1;
    }
}

let validar2= confirm("Desea contratar el servicio de Belleza de Pies?");
if(validar2){
    cant2= Number(prompt("Cantidad:"));
    if(cant2 > listaServicios[2].stock){
        console.log("No se puede realizar la compra");
        alert("No se puede realizar la compra")
    }else{
        listaServicios[2].stock = listaServicios[2].stock - cant2;
    }
}

let validar3= confirm("Desea contratar el servicio de Masaje Corporal?");
if(validar3){
    cant3= Number(prompt("Cantidad:"));
    if(cant3 > listaServicios[0].stock){
        console.log("No se puede realizar la compra");
        alert("No se puede realizar la compra")
    }else{
        listaServicios[0].stock = listaServicios[0].stock - cant3;
    }
}

costoTotal(cant1, cant2, cant3);

//Función para el costo total 
function costoTotal(a, b, c){
    total = listaServicios[1].precio*a + listaServicios[2].precio*b + listaServicios[0].precio*c;
    mostrarResultado(total);

    return total; 
}

function mostrarResultado(z){
    console.log("El costo total de tu compra es: $" + z);
    alert(`El costo total de tu compra es: $ ${z}`);;
}

//Consulta de pago en cuentas y calculo de cada una de ellas 
if(total > 0){
    let cuotas = prompt("Desea pagar en cuotas?");

    while(cuotas != "si" && cuotas != "no"){
        cuotas = prompt("Desea pagar en cuotas?");  
    }   

    switch(cuotas){
        case "si":
            let cantCuotas = Number(prompt("Indique la cantidad de cuotas (3 sin interes o 6 con 3% de recargo): "));
            calculoCuotas(cantCuotas);
        case "no": aplicarDescuento(total);
    }
}



//funcion para el calculo de cuotas
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

//Funcion para mostrar el valor de cada cuota
function mostrarValor (y){
    console.log("El costo de cada cuota es:" + " " + y);
    alert(`El costo de cada cuota es: $ ${y}`);;
}

//En caso de no abonar en cuotas se aplica descuento - Función para el calculo del descuento 

function aplicarDescuento (p){
    descuento = p*0.9;
    alert(`Se le aplica un 10% de descuento, el nuevo total es: $ ${descuento}`);
    console.log("Se le aplica un 10% de descuento, el nuevo total es: $" + descuento);
    return descuento;
}


/* -------------- Contactos ------------ */
//Sumar contactos de la pagina "contacto" del sitio
class Contact {
    constructor (nombre, apellido, edad, mail){
        this.nombre = nombre;
        this.apellido = apellido; 
        this.edad = edad;
        this.mail = mail;
    }

}

let listaContactos = [];

const NuevoContacto = () => {
    nombre = prompt("Ingrese su nombre:");
    apellido = prompt("Ingrese su apellido:");
    edad = Number(prompt("Ingrese su edad:"));
    mail = prompt("Ingrese su mail:");

    const contacto = new Contact (nombre, apellido, edad, mail);
    listaContactos.push(contacto);

}

listaContactos.push (new Contact("Juan", "Perez", 20, "juan@perez.com"));


