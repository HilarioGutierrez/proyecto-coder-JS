
//---> INICIO DE SESION <---//
const carrito = [];
//hacer condicion para que se haga un nuevo array despues de tantos datos, o hacer objeto para el carrito y guardar el objeto de carrito en el array!!//
//hacer condicion para que se haga un nuevo array despues de tantos datos, o hacer objeto para el carrito y guardar el objeto de carrito en el array!!//
//hacer condicion para que se haga un nuevo array despues de tantos datos, o hacer objeto para el carrito y guardar el objeto de carrito en el array!!//
let valorPasajes;

registrarNombre();

function comprarPasaje() {
    let destinoFinal;
    let idaYVuelta;
    let precioIda;
    let precioVuelta;
    let seguirComprando;
    let tazaAeropuerto;
    let servicio;

    do {
        destinoFinal = "";
        idaYVuelta = "";
        precioIda = 0;
        precioVuelta = 0;
        seguirComprando = false;
        tazaAeropuerto = 0;
        servicio = 0;


        //---> filtro para ver los destinos que tengan un valor inferior a $18000 <---//
        const cuantoQuiereGastar = destinosAumento.filter(destino => destino.total < 18000)
        console.log(cuantoQuiereGastar);

        //--->Procedimiento do while para elqgir el destino final<---//
        function elegirDestino() {

            destinoFinal = prompt("Elija uno de nuestros 4 destinos:\n Mendoza\n Bariloche\n Iguazu\n Cordoba\n", "Escriba el destino").toUpperCase();

            switch (destinoFinal) {
                case "MENDOZA":
                    precioIda = destinosAumento[0].precioIda;
                    precioVuelta = destinosAumento[0].precioVuelta
                    carrito.push(destinoFinal);

                    break;
                case "IGUAZU":
                    precioIda = destinosAumento[1].precioIda;
                    precioVuelta = destinosAumento[1].precioVuelta;
                    carrito.push(destinoFinal);

                    break;
                case "BARILOCHE":
                    precioIda = destinosAumento[2].precioIda;
                    precioVuelta = destinosAumento[2].precioVuelta;
                    carrito.push(destinoFinal);

                    break;
                case "CORDOBA":
                    precioIda = destinosAumento[3].precioIda;
                    precioVuelta = destinosAumento[3].precioVuelta;
                    carrito.push(destinoFinal);

                    break;
                default:
                    alert("No selecciono un destino posible. Por favor intente nuevamente")
                    precioIda = 0;
                    precioVuelta = 0;
                    elegirDestino();
                    carrito.push(destinoFinal);
                    break;
            }
        }
        elegirDestino();

        destinos.forEach(sumarIva);

        let precioIdaYVuelta = comrparIdaYVuelta(precioIda, precioVuelta);

        //---> Elegir si viajar ida y vuelta o solo ida <---//

        alert("El valor del pasaje de ida a " + destinoFinal + " es de $" + precioIda)

        function comprarVuelta() {
            valorPasajes = 0;
            idaYVuelta = prompt("Desea comprar el pasaje de vuelta?", "Escriba si o no").toLowerCase();

            if (idaYVuelta === "si") {
                valorPasajes = precioIdaYVuelta;
                confirm("El valor del pasaje de vuelta es $" + precioVuelta);
                alert("El subtotal de pasajes es de $" + valorPasajes);
            } else {
                if
                    (idaYVuelta === "no") {
                    valorPasajes = precioIda;
                    alert("El subtotal de pasajes es de $" + valorPasajes);
                } else {
                    alert("Debe elegir la opcion indicada");
                    comprarVuelta();
                }
            }

            carrito.push(valorPasajes);
        }
        comprarVuelta();

        agregarEquipaje();

        viajarConMascota();

        //--->GASTOS<---//

        tazaAeropuerto = agregarTaza(valorPasajes);
        carrito.push(tazaAeropuerto);
        servicio = calcularGastos(valorPasajes);
        carrito.push(servicio);
        iva = sumarIva(valorPasajes);
        carrito.push(iva);
        console.log(carrito)

        alert("Resumen de compra:\n\n" +
            "Pasajero/s: " + carrito[0] + "\n" +
            "Destino: " + carrito[0] + "\n" +
            "Equipaje: $" + carrito[2] + "\n" +
            "Mascota: $" + carrito[3] + "\n" +
            "Taza aeroportuaria: $" + carrito[4] + + "\n" +
            "Gastos de servicio: $" + carrito[5] + "\n" +
            "IVA: $" + carrito[6] + "\n" +
            "Total: $")

        //ACTUALIZAR RESUMEN DE COMPRA CON TODOS LOS DATOS NECESARIOS//
        //ACTUALIZAR RESUMEN DE COMPRA CON TODOS LOS DATOS NECESARIOS//
        //ACTUALIZAR RESUMEN DE COMPRA CON TODOS LOS DATOS NECESARIOS//

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

function calcularGastos(servicios) {
    let servicio = servicios * 0.10;
    return servicio;
}

function sumarIva(monto) {
    let iva = monto * 0.21

    return iva
}

function registrarNombre() {

}

function agregarEquipaje() {
    let sumarEquipaje = 0;
    let precioEquipaje = 0;
    ;

    sumarEquipaje = parseInt(prompt("Desea agregar equipaje?\n 1-Bodega 23kg $3399\n 2-Bodega 12kg $2599\n 3-En cabina 10kg $2399\n 4-No deseo agregar equipaje", "Escriba el numero de la opcion que desee"));

    switch (sumarEquipaje) {
        case 1:
            precioEquipaje = equipajes[0].precio;
            confirm("usted selecciono MALETA EN BODEGA DE 23KG $" + precioEquipaje);
            break;
        case 2:
            precioEquipaje = equipajes[1].precio;
            confirm("usted selecciono MALETA EN BODEGA DE 12KG $" + precioEquipaje);
            break;
        case 3:
            precioEquipaje = equipajes[2].precio;
            confirm("usted selecciono MALETA EN CABINA DE 10KG $" + precioEquipaje);
            break;
        case 4:
            confirm("Usted viajara solo con equipaje de mano. Si se arrepiente puede abonar el equipaje extran en el aeropuerto")
            break;
        default:
            alert("No ha elegido una opcion correcta, intente nuevamente. Gracias")
            precioEquipaje = 0;
            sumarEquipaje = 0;
            agregarEquipaje();
            break;
    }

    carrito.push(precioEquipaje);
    console.log(carrito)
}

function viajarConMascota() {
    let mascota = "";
    let precioMascota = 0;
    let pesoMascota = 0;

    mascota = prompt("Viaja con su mascota?", "si o no").toLowerCase();

    switch (mascota) {
        case "si":
            pesoMascota = Number(prompt("cuanto pesa su mascota?"));
            if (pesoMascota <= 18) {
                precioMascota = 5000;
                alert("Su mascota puede viajar en cabina por un costo de $" + precioMascota)

            }
            if (pesoMascota > 18) {
                precioMascota = 4000;
                alert("Su mascota pesa mas de 18KG. Solo puede viajar en bodega por un costo de $" + precioMascota)
            }
            break
        case "no":
            pesoMascota = 0;
            precioMascota = 0;
            alert("Usted no viajara con su mascota");
            break
        default:
            pesoMascota = 0;
            precioMascota = 0;
            alert("Ingreso mal un dato. intente nuevamente");
            viajarConMascota();
            break;
    }

    carrito.push(precioMascota);
    console.log(carrito)
}



comprarPasaje()