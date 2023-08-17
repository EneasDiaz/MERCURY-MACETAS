//CAPTURO LAS SECTION PARA PODER LUEGO SUMAR LAS CARDS DENTRO DE CADA UNA
let macetas_petizas = document.querySelector("#macetas_petizas")
let macetas_columnas = document.querySelector("#macetas_columnas")
let macetas_platos = document.querySelector("#macetas_platos")

//ME TRAIGO CON EL FETCH EL ARRAY DE PRODUCTOS GUARDADOS EN EL JSON
//RECORRO EL ARRAY DE PRODUCTOS Y DE MANERA DINAMICA CREO CARDS DISTRIBUIDAD POR SU TIPO
fetch('../propductos.json')
    .then((resp) => resp.json())
    .then((productos) => {
        productos.forEach(({id ,tipo , nombre, precio, imagen}) => {
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
        })
        productos.forEach(producto => {
            const botonPlus = document.getElementById(producto.id);
            botonPlus.addEventListener("click", () => sumarAlCarrito(producto));
        });
    })
