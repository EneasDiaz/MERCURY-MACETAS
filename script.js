let piramyd = 5500
let ovni = 4500
let espejo = 3500
let cufera = 6500
let romfera = 6500
let totem = 7500
let circulo = 2500
let ovalo = 2500 
let mediafera = 3000
let maceta = ""
let carrito = ""
let valor = 0
let cantidad_macetas = 0
let total = 0
let seguir_comprando = true


function valida(maceta) {
    return (maceta == "piramyd") || (maceta == "ovni") || (maceta =="espejo" ) || (maceta == "cufera" ) || (maceta == "romfera" ) || (maceta ==  "totem") || (maceta == "circulo") || (maceta == "ovalo") || (maceta == "mediafera") 
}

function eleccion() {
    let precio = 0
    maceta = prompt (" Que maceta queria comprar (PIRAMYD, OVNI, ESPEJO, CUFERA, ROMFERA, TOTEM, CIRCULO, OVALO, MEDIAFERA)");
    while (!valida(maceta.toLowerCase())) {
        alert("la maceta que elijio no se encuentra")
        maceta = prompt (" Que maceta queria comprar (PIRAMYD, OVNI, ESPEJO, CUFERA, ROMFERA, TOTEM, CIRCULO, OVALO, MEDIAFERA)");
    }
    switch (maceta.toLowerCase()) {
        case "piramyd" :
            precio = piramyd
            break;
        case "ovni" :
            precio = ovni
            break;
        case "espejo" :
            precio = espejo
            break;
        case "cufera" :
            precio = cufera
            break;
        case "romfera" :
            precio = romfera
            break;
        case "totem" :
            precio = totem
            break;
        case "circulo" :
            precio = circulo
            break;
        case "ovalo" :
            precio = ovalo
            break;
        case "mediafera" :
            precio = mediafera
            break;
    }
    return precio
}


function cantidad(precio) {
    cantidad_macetas = Number(prompt("¿Cuantas macetas queria? Tienes un descuanto (15%) a partir de 3 unidades de la misma."))
    while ((cantidad_macetas <= 0) || (!Number.isInteger(cantidad_macetas))) {
        alert(" la cantidad que puso no puede ser ejecutada")
        cantidad_macetas = Number(prompt("¿Cuantas macetas queria? Tienes un descuanto (15%) a partir de 3 unidades de la misma."))
    }
    if ( cantidad_macetas <= 2 ) {
        valor = cantidad_macetas * precio
    }
    else {
        valor = cantidad_macetas * precio * 0.85
    }
    carrito += `-${maceta} x ${cantidad_macetas} = ${valor}\n`
    console.log(valor)
    return valor
}

while (seguir_comprando) {
    total += cantidad(eleccion())
    seguir_comprando = confirm("Desea seguir comprando?")
}

alert("Macetas:\n" + carrito + "\n" + "El valor total de la compra es de " + total + " pesos")