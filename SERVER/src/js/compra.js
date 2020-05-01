/*validacion formulario de compra  */
var validacion = document.getElementById("formulariov");
var prestamo = document.getElementById("prestamo");
var prestamo2 = document.getElementById("prestamo2");
var puntos = document.getElementById("puntos");
var subcuenta = document.getElementById("subcuenta");
var check = document.getElementById("check")

function validate(e) {

    var isChecked = document.getElementById('acepto').checked;
    if (isChecked) {
        console.log("se ha enviado");
        check.classList.add("correcto")
        return true;
    } else {
        event.preventDefault();
        check.classList.add("alerta")

        console.log("selecciona algo");
        return false;
    }
}


function soloNumeros(e) {
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    numeros = "1234567890"
    especiales = "8-37-38-46-164";
    tecladoEspecial = false;
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecladoEspecial = true;
            break;
        }
    }
    if (numeros.indexOf(teclado) == -1 && !tecladoEspecial) {
        return false;
    }
}

function validateprestamo(prestamo) {
    if (prestamo.value === 0 || prestamo.value == "") {

        event.preventDefault()
        prestamo.classList.add("error")
        prestamo.classList.remove("correcto")
        prestamo.classList.remove("alert")
        return (false)
    } else if (prestamo.value.length < 6 || prestamo.value.length > 6) {
        event.preventDefault()
        prestamo.classList.remove("error")
        prestamo.classList.remove("correcto")
        prestamo.classList.add("alerta")

        return (false)
    } else {

        prestamo.classList.remove("alert")
        prestamo.classList.remove("error")
        prestamo.classList.add("correcto")

        return (true)
    }
}

function validateprestamo2(prestamo2) {
    if (prestamo2.value === 0 || prestamo2.value == "") {

        event.preventDefault()
        prestamo2.classList.add("error")
        prestamo2.classList.remove("correcto")
        prestamo2.classList.remove("alert")
        return (false)
    } else if (prestamo.value.length < 6 || prestamo.value.length > 6) {
        event.preventDefault()
        prestamo2.classList.remove("error")
        prestamo2.classList.remove("correcto")
        prestamo2.classList.add("alerta")

        return (false)
    } else {

        prestamo2.classList.remove("alert")
        prestamo2.classList.remove("error")
        prestamo2.classList.add("correcto")

        return (true)
    }
}

function validatepuntos(puntos) {
    if (puntos.value === 0 || puntos.value == "") {

        puntos.classList.remove("alert")
        puntos.classList.remove("error")
        puntos.classList.add("correcto")

        return (true)

    } else if (puntos.value.length < 2 || puntos.value.length > 3) {
        event.preventDefault()
        puntos.classList.remove("error")
        puntos.classList.remove("correcto")
        puntos.classList.add("alerta")

        return (false)
    } else if (puntos.value < 89 || puntos.value > 116) {
        event.preventDefault()
        alert("se ejecuto el else if 2")
        puntos.classList.remove("error")
        puntos.classList.remove("correcto")
        puntos.classList.add("alerta")

        return (false)
    } else {

        puntos.classList.remove("alert")
        puntos.classList.remove("error")
        puntos.classList.add("correcto")

        return (true)
    }
}

function validateSubcuenta(subcuenta) {
    if (subcuenta.value === 0 || subcuenta.value == "") {

        event.preventDefault()
        subcuenta.classList.add("error")
        subcuenta.classList.remove("correcto")
        subcuenta.classList.remove("alert")
        return (false)
    } else if (subcuenta.value.length < 4 || subcuenta.value.length > 6) {
        event.preventDefault()
        subcuenta.classList.remove("error")
        subcuenta.classList.remove("correcto")
        subcuenta.classList.add("alerta")

        return (false)
    } else {

        subcuenta.classList.remove("alert")
        subcuenta.classList.remove("error")
        subcuenta.classList.add("correcto")
        "$" + subcuenta.value;
        return (true)
    }
}



validacion.addEventListener("submit",
    e => {
        validateSubcuenta(subcuenta);
        validateprestamo(prestamo);
        validatepuntos(puntos);
        validate();
        validateprestamo2(prestamo2);

    })