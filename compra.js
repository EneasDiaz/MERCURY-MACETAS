//ME FIJO EN EL STORAGE LOCAL SI HAY ALGO AMACENADO PARA QUE ME LO TRAIGA Y SINO LO TRAE VACIO
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

//BUSCO EN EL CARRITO SI ESTA EL OBJETO LLAMADO 
//SI NO ESTA, LE AGREGO LA PROPIEDAD CANTIDAD Y LO SUMO AL CARRITO
//SI ESTA LE INCREMENTO LA CANTIDAD 
//LLAMOS A guardarLocalStorage(); PARA QUE CADA VEZ QUE SE EJECUTE ESTE EVENTO SE ME MODIFIQUE EN EL LOCAL TMBN Y ACTUALIZO EL MODAL 
function sumarAlCarrito(producto) {
    let item = carrito.find((x) => x.id === producto.id);
    if (item) {
        producto.cantidad++;
    } else {
        carrito.push(producto);
        producto.cantidad = 1;
    }
    Toastify({
        text: `Se agrego una ${producto.nombre.toUpperCase()} al carrito`,
        duration: 3000,
        close: false,
        gravity: "top",
        position: "right",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast();
    guardarLocalStorage();
    actualizarModalCarrito(); 
}

//CUANDO SE LLAME A LA FUNCION GUARDA EN EL LOCALSTORAGE LO ALMACENADO EN EL CARRITO EN FORMATO JSON
function guardarLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}


//CAPTURO EL MODAL Y LE INGRESO CARDS HTML DINAMICAS CON SU PROPIO BOTON DE ELIMINAR
//LLAMO A LA FUNCION calcularTotalCarrito(); PARA CADA VEZ QUE SE ME ACTUALICE EL MODAL ME MODIFIQUE LA LEYENDA DEL PRECIO TOTAL

function actualizarModalCarrito() {
    let modal = document.querySelector("#modal");
    modal.innerHTML =``;
    carrito.forEach(producto => {
        const {id ,tipo , nombre, precio, imagen, cantidad} = producto
        let subtotal = precio * cantidad
        modal.innerHTML +=
        `<div class="tarjeta">
        <div class="foto"><img src="${imagen}" alt="foto maceta"></div>
        <div class="textBox">
            <div class="textContent">
                <p class="h1">${nombre.toUpperCase()} X ${cantidad}</p>
                <span id="botonEliminar" class="span">X</span>
            </div>
            <p class="p">$${subtotal}</p>
        <div>
    </div></div></div>`;
    });
    let totalCarrito = calcularTotalCarrito();
    modal.innerHTML += `<p>Total: $${totalCarrito}</p>`;
    const botonesEliminar = modal.querySelectorAll("#botonEliminar");
    botonesEliminar.forEach((boton, i) => {
        boton.addEventListener("click", () => eliminarDelCarrito(i));
    });
}

//PARA CUANDO SE TOCA EL BOTON DE ELIMINAR PROPIO DE CADA CARD EN EL MODAL LE ELIMINA POR EL INDICE PROPIO DENTRO DEL CARRITO 
//Y ACTUALIZO EL LOCAL Y EL MODAL PARA QUE QUEDE TODO SINCRONICO
function eliminarDelCarrito(eliminado) {
    carrito.splice(eliminado, 1); 
    guardarLocalStorage(); 
    actualizarModalCarrito(); 
}

actualizarModalCarrito();

//RECORRO EL CARRITO ACOMULANDO EL TOTAL DE LOS OBJETOS Y SUS VALORES
function calcularTotalCarrito() {
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });
    return total;
}


//CREO EL EVENTO CLICK PARA EL BOTON PROCEDER AL PAGO
// SI HAY ALGO EN EL CARRITO LIMPIO EL MODAL, REMUEVO EL CARRITO DEL STORAGE Y BORRO LA LEYENDA DEL PAGO TOTAL SIMULANDO COMPRA EFECTUADA
// SI NO HAY NADA EN EL CARRITO AVISA LA NECESIDAD DE SUMAR ALGO PARA PAGAR 
const botonFinalizarCompra = document.getElementById('botonFinalizarCompra');
botonFinalizarCompra.addEventListener('click', () => {
    if (carrito.length > 0) {
        carrito = [];
        document.querySelector('#modal').innerHTML = '';
        localStorage.removeItem('carrito');
        document.querySelector('#total').innerHTML = ``;
        Swal.fire(
            '¡Pago realizado!',
            'Te llegara lo antes posible',
        )
    }else{
        Swal.fire({
            icon: 'error',
            title: 'DEBES SUMAR ALGO ANTES',
        })
    }
})

