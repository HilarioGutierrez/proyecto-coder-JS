
// ---> PRE-ENTREGA HILARIO GUTIERREZ - COTIZADOR DE DIVISA <---//
function iniciarCotizacion() {

    let monedaOrigen = "";
    let monedaDestino = "";
    let pedirImporte = 0;
    let cotizacionTipo = 0;
    let importeFinal = 0;
    let seguirCotizando = false;

    do {
        monedaOrigen = prompt("Usted va a cambiar pesos argentinos?", "Coloque SI o NO").toUpperCase();
        validarSiNo(monedaOrigen);

        pedirImporte = Number(prompt("ingrese el valor que desea cambiar:", "ej: 1000"));
        let importeValido = validarNumero(pedirImporte);
        console.log(importeValido)

        monedaDestino = prompt("Seleccione a que moneda desea cambiar:\n USD\n EURO\n REAL", "Escriba USD, EURO o REAL").toUpperCase();

        switch (monedaDestino) {
            case "USD":
                cotizacionTipo = 290;
                alert("El valor del Dolar en el dia de hoy es de $290");
                break;
            case "EURO":
                cotizacionTipo = 310;
                alert("El valor del Euro en el dia de hoy es de $310");
                break;
            case "REAL":
                cotizacionTipo = 12;
                alert("El valor del Real en el dia de hoy es de $12");
                break;
            default:
                alert("Debe ingresar una de las opciones indicadas para recibir la cotizacion");
                cotizacionTipo = 0;
                pedirImporte = 0;
                break;
        };
        console.log(monedaDestino)
        console.log(cotizacionTipo)

importeFinal = cotizar(importeValido,cotizacionTipo);

        alert("usted recibira " + monedaDestino + " " + importeFinal.toFixed(3))
        console.log(importeFinal.toFixed(3))

        seguirCotizando = confirm("Quiere realizar otra cotizacion?");

    } while (seguirCotizando) {
        alert("Gracias por elegirnos :)")
    }

    return importeFinal
}

//--->VALIDACION PARA QUE PONGA SI O NO <---//
function validarSiNo(monedaOrigen) {
    while (monedaOrigen === "NO" || monedaOrigen !== "SI") {
        if (monedaOrigen !== "NO") {
            alert("Debe ingresar SI para continuar");
        } else {
            alert("PARA REALZIAR EL CAMBIO DEBE TENER PESOS ARGENTINOS");
        }

        monedaOrigen = prompt("Usted va a cambiar pesos argentinos?", "Coloque SI o NO").toUpperCase();

    }
}

//--->VALIDACION PARA QUE PONGA N°>=0 <---//
function validarNumero(pedirImporte) {
    while (Number.isNaN(pedirImporte) || pedirImporte === 0) {
        if (pedirImporte !== 0) {
            alert("Debe ingresar un importe valido");
        } else {
            alert("debe ingresar un valor superior a cero");
        }

        pedirImporte = Number(prompt("ingrese el valor que desea cambiar:", "ej: 1000"));

    }
    return pedirImporte;
}

//--->FUNCION CONVERSION<---//

function cotizar(importe, cambio) {
    return importe / cambio;
}

iniciarCotizacion();








