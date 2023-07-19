const productos = []

class Macetas {
    constructor (id, tipo, nombre, precio){
        this.id = id
        this.tipo = tipo
        this.nombre = nombre
        this.precio = precio
    }
}

const piramyd = new Macetas (1, "petiza", "piramyd", 5500);
const ovni = new Macetas (2, "petiza", "ovni", 4500);
const espejo = new Macetas (3, "petiza", "espejo", 3500);
const cufera = new Macetas (4, "columna", "cufera", 6500);
const romfera = new Macetas (5, "columna", "romfera", 6500);
const totem = new Macetas (6, "columna", "totem", 7500);
const circulo = new Macetas (7, "plato", "circulo", 2500);
const ovalo = new Macetas (8, "plato", "ovalo", 2500);
const mediafera = new Macetas (9, "plato", "mediafera", 3000);

productos.push(piramyd, ovni, espejo, cufera, romfera, totem, circulo, ovalo, mediafera)

function valida(maceta) {
    for (const name of productos) {
        if (name.nombre === maceta ){
            return true
        }
    }
}

function eleccion() {
    let maceta = prompt ( `Que maceta queria comprar: ${productos.map((x) => " " + x.nombre.toUpperCase() )}.`);
    while (!valida(maceta.toLowerCase())) {
        alert(`la maceta que elijio no se encuentra`)
        maceta = prompt (`Que maceta queria comprar: ${productos.map((x) => " " + x.nombre.toUpperCase() )}.`);
    }
    return productos.find((x) => x.nombre === maceta.toLowerCase())
}

const carrito = []

function cantidad(precio) {
    let cantidad_macetas = Number(prompt(`¿Cuantas macetas queria? Tienes un descuento (15%) a partir de 3 unidades.`))
    while ((cantidad_macetas <= 0) || (!Number.isInteger(cantidad_macetas))) {
        alert(`la cantidad que puso no puede ser ejecutada`)
        cantidad_macetas = Number(prompt(`¿Cuantas macetas queria? Tienes un descuento (15%) a partir de 3 unidades.`))
    }
    for (let i = 0; i < cantidad_macetas; i++) {
        carrito.push(precio)
    }
}

let seguir_comprando = true

while (seguir_comprando) {
    cantidad(eleccion())
    seguir_comprando = confirm("Desea seguir comprando?")
}

function total(subtotal) {
    if (carrito.length < 3){
        return subtotal
    }
    else{
        return subtotal * 0.85
    }
}

const ticket = []

let papel = ``


carrito.forEach( (item) => {
    let nombre = item.nombre
    if (ticket[nombre]) {
        ticket[nombre]++
    }
    else{
        ticket[nombre] = 1
    }
});

for (let nombre in ticket){
    papel += (`Maceta: ${nombre.toUpperCase()} x ${ticket[nombre]}\n`)
}

alert(`${papel}El valor total de la compra es de ${total(carrito.reduce((acumulador, elemento) => acumulador + elemento.precio, 0))} pesos.`)