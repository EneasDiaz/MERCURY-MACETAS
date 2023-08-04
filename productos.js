const productos = []

//CREO UNJA CLASE PARA QUE DE MANERA DINAMICA A LA HORA DE HACER UNA NUEVA MACETA SE SUME SIN PROBLEMAS
class Macetas {
    constructor (id, tipo, nombre, precio, imagen){
        this.id = id
        this.tipo = tipo
        this.nombre = nombre
        this.precio = precio
        this.imagen = imagen
    }
}


const piramyd = new Macetas (1, "petiza", "piramyd", 5500, "../img/PIRAMYD.JPG");
const ovni = new Macetas (2, "petiza", "ovni", 4500, "../img/OVNI.JPG");
const espejo = new Macetas (3, "petiza", "espejo", 3500, "../img/ESPEJO.JPG");
const cufera = new Macetas (4, "columna", "cufera", 6500, "../img/KUFERA.jpg");
const romfera = new Macetas (5, "columna", "romfera", 6500, "../img/ROMFERA.JPG");
const totem = new Macetas (6, "columna", "totem", 7500, "../img/TOTEM.JPG");
const circulo = new Macetas (7, "plato", "circulo", 2500, "../img/REDONDO.JPG");
const ovalo = new Macetas (8, "plato", "ovalo", 2500, "../img/OVALO.JPG");
const mediafera = new Macetas (9, "plato", "mediafera", 3000, "../img/ADEFINIR.JPG");


//CON SOLO PUSHEARLAS EL RESTO DEL CODIGO EFECTUA LOS PROCESOS PERFECTAMENTE
productos.push(piramyd, ovni, espejo, cufera, romfera, totem, circulo, ovalo, mediafera)

//CAPTURO LAS SECTION PARA PODER LUEGO SUMAR LAS CARDS DENTRO DE CADA UNA
let macetas_petizas = document.querySelector("#macetas_petizas")
let macetas_columnas = document.querySelector("#macetas_columnas")
let macetas_platos = document.querySelector("#macetas_platos")


//RECORRO EL ARRAY DE PRODUCTOS Y DE MANERA DINAMICA CREO CARDS DISTRIBUIDAD POR SU TIPO
for (const tarjeta of productos) {
    const {id ,tipo , nombre, precio, imagen} = tarjeta
    switch (tipo) {
        case "petiza":
            macetas_petizas.innerHTML += 
            `<div class="card primeras" style="width: 18rem;">
                <img src="${imagen}" class="card-img-top" alt="maceta escultorica">
                <div class="card-body">
                    <h5 class="card-title">${nombre.toUpperCase()}</h5>
                    <p class="card-text">$${precio}</p>
                    <button id="${id}" class="btn btn-primary">SUMAR AL CARRITO</button>
                </div>
            </div>`
            break;
        case "columna":
            macetas_columnas.innerHTML += 
            `<div class="card segundas" style="width: 18rem;">
                <img src="${imagen}" class="card-img-top" alt="maceta escultorica">
                <div class="card-body">
                    <h5 class="card-title">${nombre.toUpperCase()}</h5>
                    <p class="card-text">$${precio}</p>
                    <button id="${id}" class="btn btn-primary">SUMAR AL CARRITO</button>
                </div>
            </div>`
            break;
        case "plato":
            macetas_platos.innerHTML += 
            `<div class="card primeras" style="width: 18rem;">
                <img src="${imagen}" class="card-img-top" alt="maceta escultorica">
                <div class="card-body">
                    <h5 class="card-title">${nombre.toUpperCase()}</h5>
                    <p class="card-text">$${precio}</p>
                    <button id="${id}" class="btn btn-primary">SUMAR AL CARRITO</button>
                </div>
            </div>`
            break;
    }
}
