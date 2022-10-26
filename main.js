
// ---> PRE-ENTREGA HILARIO GUTIERREZ - COTIZADOR DE DIVISA <---//

let monedaOrigen = "";

let monedaDestino = "";

let pedirImporte = 0;

let importeFInal = 0;

let cotizacionTipo = 0;

let seguirCotizando = false;


do {

    monedaOrigen = prompt("Usted va a cambiar pesos argentinos?", "Coloque SI o NO").toUpperCase();

    //--->VALIDACION PARA QUE PONGA SI O NO <---//

    while (monedaOrigen === "NO" || monedaOrigen !== "SI") {

        if (monedaOrigen !== "NO") {
            alert("Debe ingresar SI para continuar");

        } else {
            alert("PARA REALZIAR EL CAMBIO DEBE TENER PESOS ARGENTINOS");
        }

        monedaOrigen = prompt("Usted va a cambiar pesos argentinos?").toUpperCase();

    }

    pedirImporte = Number(prompt("ingrese el valor que desea cambiar:", "ej: 1000"));

    //--->VALIDACION PARA QUE PONGA N°>=0 <---//


    while (!Number(pedirImporte)) {

        if (Number(pedirImporte)) {
            alert("Debe ingresar un importe valido");
        } else {
            alert("Debe ingresar un importe valido");
        }


        pedirImporte = Number(prompt("ingrese el valor que desea cambiar:", "ej: 1000"));


    }


    monedaDestino = prompt("Seleccione a que moneda desea cambiar:\n USD\n EURO\n REAL", "Escriba USD, EURO o REAL").toUpperCase();

        // ---> FUNCION <--- // 

    let resultado = 0;

    function cotizacion(importe, cambio) {

        return resultado = importe / cambio;

    }

    cotizacionTipo = 0;

    switch (monedaDestino) {
        case "USD":
            cotizacionTipo = 290;
            alert("El valor del Dolar en el dia de hoy es de $290");
            alert("Usted recibirá " + monedaDestino + " " + cotizacion(pedirImporte, cotizacionTipo).toFixed(3))
            break;

        case "EURO":
            cotizacionTipo = 310;
            alert("El valor del Euro en el dia de hoy es de $310");
            alert("Usted recibirá " + monedaDestino + " " + cotizacion(pedirImporte, cotizacionTipo).toFixed(3))
            break;

        case "REAL":
            cotizacionTipo = 12;
            alert("El valor del Real en el dia de hoy es de $12");
            alert("Usted recibirá " + monedaDestino + " " + cotizacion(pedirImporte, cotizacionTipo).toFixed(3))
            break;

        default:
            alert("Debe ingresar una de las opciones indicadas para recibir la cotizacion");
            cotizacionTipo = 0;
            pedirImporte = 0;
            break;


    };

    seguirCotizando = confirm("Quiere realizar otra cotizacion?");

} while (seguirCotizando) {

    alert("Gracias por elegirnos :)")


}


