
function comprarPasaje() {

    //Presento las variables sin valor // 

    let destinoFinal;
    let idaYVuelta;
    let precioIda;
    let precioVuelta;
    let seguirComprando;
    let tazaAeropuerto;
    let subtotal;
    let servicio;
    let costoPrecioFinal;

    do {
        //dentro del ciclo que quiero aplicar las variables y que se reinicien cada vez que se inicie el DO debo inicializar variables en 0 // 

        destinoFinal = "";
        idaYVuelta = "";
        precioIda = 0;
        precioVuelta = 0;
        seguirComprando = false;
        tazaAeropuerto = 0;
        subtotal = 0;
        servicio = 0;
        costoPrecioFinal = 0;

        function elegirDestino() {
            destinoFinal = prompt("Elija uno de nuestros 3 destinos:\n Mendoza\n Bariloche\n Misiones\n Cordoba\n", "Escriba el destino").toUpperCase();

            class EleccionDestino {
                constructor(destino, Ida, Vuelta) {
                    this.nombre = destino.toUpperCase();
                    this.precioIda = Number(Ida);
                    this.precioVuelta = Number(Vuelta);

                }

            }

            const destino1 = new EleccionDestino("MEMDNOZA", 6999, 5649);
            const destino2 = new EleccionDestino("MISIONES", 6455, 5000);
            const destino3 = new EleccionDestino("BARILOCHE", 12300, 10500);
            const destino4 = new EleccionDestino("CORDOBA",13187,24861)

            switch (destinoFinal) {
                case "MENDOZA":
                    precioIda = destino1.precioIda;
                    precioVuelta = destino1.precioVuelta;
                    break;
                case "MISIONES":
                    precioIda = destino2.precioIda;
                    precioVuelta = destino2.precioVuelta;
                    break;
                case "BARILOCHE":
                    precioIda = destino3.precioIda;
                    precioVuelta = destino3.precioVuelta;
                    break;
                    case "CORDOBA":
                    precioIda = destino4.precioIda;
                    precioVuelta = destino4.precioVuelta;
                    break;
                default:
                    alert("No selecciono un destino posible. Por favor intente nuevamente")
                    precioIda = 0;
                    precioVuelta = 0;
                    elegirDestino();
                    break;
            }
        }

        elegirDestino();

        let precioIdaYVuelta = comrparIdaYVuelta(precioIda, precioVuelta);

        function elegirIdaYVuelta() {
            idaYVuelta = parseInt(prompt("Usted selecciono como destino " + destinoFinal + " desea viajar:\n 1-Ida solo\n 2-Ida y Vuelta", "1 o 2"));

            switch (idaYVuelta) {
                case 1:
                    subtotal += precioIda;
                    alert("Usted eligio ida. El valor del vuelo es $" + subtotal);
                    break;

                case 2:
                    subtotal += precioIdaYVuelta;
                    alert("Usted eligio ida y vuelta. El valor del vuelo es $ " + subtotal);
                    break

                default:
                    alert("Ingreso un dato incorrecto, intente nuevamente");
                    elegirIdaYVuelta();
                    break;
                //Agregar en default el camino para que algo incorrecto vuelva al selector de 1 o 2
            }
        }
        elegirIdaYVuelta();

        tazaAeropuerto = agregarTaza(subtotal);
        servicio = calcularGastos(subtotal);
        iva = sumarIva(subtotal);
        costoPrecioFinal = calcularFinal(subtotal, servicio, tazaAeropuerto, iva);
        
        console.log(destinoFinal);
        console.log(costoPrecioFinal)

        alert("Resumen de compra:\nDestino: " + destinoFinal + "\n" + "subtotal : $" + subtotal + "\n" + "Taza Aeroportuaria: $" + tazaAeropuerto + "\n" + "Gastos de servicio : $" + servicio + "\n" + "Iva: $" + iva + "\n" + "Costo Final: $" + costoPrecioFinal)

        seguirComprando = confirm("Quiere comprar otro pasaje?");

    } while (seguirComprando) {
        alert("Gracias por visitarnos")
    }
}

function comrparIdaYVuelta(precioIda, precioVuelta) {

    return precioIda + precioVuelta
}

function agregarTaza(Aeropuerto) {
    let tazaAeropuerto = Aeropuerto % 90
    return tazaAeropuerto
}

function calcularFinal(importe, taza, gastos, iva) {
    costoPrecioFinal = importe + taza + gastos + iva;
    return costoPrecioFinal;
}

function calcularGastos(servicios) {
    let servicio = servicios * 0.10;
    return servicio;
}

function sumarIva(monto) {
    let iva = monto * 0.21

    return iva
}

comprarPasaje()