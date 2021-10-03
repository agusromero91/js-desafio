//Desafio 6 
//Programa para la carga de servicios 
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
listaServicios.push (new Service("1003", "masaje de pies", 1500, 5));

//Agregar servicio a la lista 
const agregarServicio = () => {
    let sku = prompt("SKU del servicio:");
    let descripcion = prompt("Descripción del servicio:");
    let precio = Number(prompt("Indique el precio del servicio:"));
    let stock = Number(prompt("Stock del servicio para la venta:"));
        
    let servicio = new Service(sku, descripcion, precio, stock);
    listaServicios.push(servicio);
    
}    

//Filtros en la web de busqueda < 1000 pesos 
let filtroPrecio = listaServicios.filter(servicio => servicio.precio < 1000);
console.log(filtroPrecio);


//Desafio Complementario: ordenar por menor precio

listaServicios.sort((a,b) => {
    if(a.precio > b.precio){
        return 1;
    }else if(a.precio < b.precio){
        return -1;
    }
    return 0;
});
console.log(listaServicios);