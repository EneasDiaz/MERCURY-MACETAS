//CAPTURO EL FORMULARIO Y LE AGREGO EL EVENTO SUBMIT PARA PODER VALIDARLO
let formulario = document.querySelector("form");
formulario.addEventListener("submit", validar_formulario);

//ACA ALMACENO LAS CONSULTAS REALIZADAS A PARTIR DEL FORMULARIO
let consultas = []

//EFECTUO TOTO EL FORMULARIO 
function validar_formulario(e) {
    //EVITO QUE EL EVENTO SUBMIT ME REFRESHEE LA PAGINA
    e.preventDefault();
// CAPTURO LOS VALORESW DE TODOS LOS INPUTS
    let nombre = formulario.querySelector("#inputNombre").value
    let apellido = formulario.querySelector("#inputApellido").value
    let email = formulario.querySelector("#inputEmail").value
    let direccion = formulario.querySelector("#inputDireccion").value
    let especificacion = formulario.querySelector("#inputEspecificacion").value
    let ciudad = formulario.querySelector("#inputCiudad").value
    let pais = formulario.querySelector("#inputState").value
    let codigo = parseInt(formulario.querySelector("#inputCo").value)
    let texto = formulario.querySelector("#textArea").value
//CREO UN OBJETO
    let mensaje = {
        nombre : nombre,
        apellido : apellido,
        email : email,
        direccion : direccion, 
        especificacion :  especificacion,
        ciudad : ciudad,
        pais : pais,
        codigo : codigo, 
        texto : texto 
    }
// MINIMO DEBE COMPELTAR LOS DATOS DE COMUNICACION PARA PODER ENVIAR UNA CONSULTA 
if ((mensaje.nombre == ``) || (mensaje.apellido == ``) || (mensaje.email == ``) || (mensaje.texto == ``)) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes completar los campos de Nombre, Apellido, Email y Escribinos'
    })
}
else{
consultas.push(mensaje)
Swal.fire({
    icon: `success`,
    iconColor: `#706861`,
    title: `Hola ${mensaje.nombre}, tu consulta se envio correctamente. Pronto nos contactaremos!`,
    showConfirmButton: false,
    timer: 3000
    })
}
//NOS PERMITE SABER QUE EL FORMULARIO ESTA CAPTURANDO BN LOS VALORES
    console.log(consultas)
//LIMPIO EL FORMULARIO
    formulario.reset()
}