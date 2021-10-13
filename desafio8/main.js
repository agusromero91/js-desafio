/* -------------- Servicios ------------ */
//Carga de servicios desde la web

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

//declaro variables
const sku = document.getElementById("sku");
const descripcion = document.getElementById("descripcion");
const precio = document.getElementById("precio");
const stock = document.getElementById("stock");

//Agregar servicio a la lista 
const agregarServicio = (servicio) => {

    const servicioP = document.createElement("div")

    const servicioSku = document.createElement("h4")
    servicioSku.textContent =servicio.sku
    servicioP.appendChild(servicioSku)

    const servicioDes = document.createElement("p")
    servicioDes.textContent =servicio.descripcion
    servicioP.appendChild(servicioDes)

    const servicioPrecio = document.createElement("p")
    servicioPrecio.textContent =servicio.precio
    servicioP.appendChild(servicioPrecio)

    const servicioStock = document.createElement("p")
    servicioStock.textContent =servicio.stock
    servicioP.appendChild(servicioStock)

    document.getElementById("servicioNuevo").appendChild(servicioP)

}   

//Evento para enviar la info de los nuevos servicios cargados en el formulario
formularioServicio.addEventListener('submit', (e) => {
    e.preventDefault()
    const servicio = new Service (sku.value, descripcion.value, precio.value, stock.value);
    listaServicios.push (servicio);
    console.log(listaServicios);
    formularioServicio.reset();
    agregarServicio(servicio);
    
  })

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
//declaro variables
const nombree = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const mail = document.getElementById("mail");

const nuevoContacto = (contacto) => {

    const contactoP = document.createElement("div")

    const contactoNombre = document.createElement("h4")
    contactoNombre.textContent =contacto.nombre
    contactoP.appendChild(contactoNombre)

    const contactoApellido = document.createElement("p")
    contactoApellido.textContent =contacto.apellido
    contactoP.appendChild(contactoApellido)

    const contactoEdad = document.createElement("p")
    contactoEdad.textContent =contacto.edad
    contactoP.appendChild(contactoEdad)

    const contactoMail = document.createElement("p")
    contactoMail.textContent =contacto.mail
    contactoP.appendChild(contactoMail)
    

    document.getElementById("contactoNuevo").appendChild(contactoP)

}  

//Evento para enviar la info de los nuevos servicios cargados en el formulario
formularioContacto.addEventListener('submit', (e) => {
    e.preventDefault(contacto)
    const contacto = new Contact (nombre.value, apellido.value, edad.value, mail.value);
    listaContactos.push (contacto);
    console.log(listaContactos);
    formularioContacto.reset();
    nuevoContacto(contacto);
    
  })

