//Crear objeto - Objeto: servicios

class Service {
    constructor (sku, descripcion, precio, stock){
        this.sku = sku; 
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock; 
    }

    compra(){
        if(this.stock > 0){
            this.stock = this.stock -1;
            console.log("Compra realizada")
        }else{
            console.log("No hay stock")
        }
    }
}

const servicio1 = new Service ("1000", "masaje corporal", 2000, 3);
const servicio2 = new Service ("1001", "belleza de manos", 790, 5);
const servicio3 = new Service ("1002", "belleza de pies", 820, 5);

console.log(servicio1);
console.log(servicio2);
console.log(servicio3);



//Crear objeto - Objeto: carga de datos en el formulario contacto de la web

class Contact {
    constructor (nombre, apellido, edad, mail){
        this.nombre = nombre;
        this.apellido = apellido; 
        this.edad = edad;
        this.mail = mail;
    }

}

const NuevoContacto = () => {
    nombre = prompt("Ingrese su nombre:");
    apellido = prompt("Ingrese su apellido:");
    edad = Number(prompt("Ingrese su edad:"));
    mail = prompt("Ingrese su mail:");
}

const contacto1 = NuevoContacto();
console.log(`Bienvenido ${this.nombre}`);
    



