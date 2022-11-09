
//---> INICIO DE SESION <---//
const carrito = [];
//hacer condicion para que se haga un nuevo array despues de tantos datos, o hacer objeto para el carrito y guardar el objeto de carrito en el array!!//
//hacer condicion para que se haga un nuevo array despues de tantos datos, o hacer objeto para el carrito y guardar el objeto de carrito en el array!!//
//hacer condicion para que se haga un nuevo array despues de tantos datos, o hacer objeto para el carrito y guardar el objeto de carrito en el array!!//
let valorPasajes;
let precioEquipaje;
let precioMascota;
let subtotal;
let total;
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
        precioEquipaje = 0;
        precioMascota = 0;
        subtotal = 0;
        total = 0;

        function elegirDestino() {

            destinoFinal = prompt("Elija uno de nuestros 4 destinos:\n Mendoza\n Bariloche\n Iguazu\n Cordoba\n", "Escriba el destino").toUpperCase();

            //Busqueda del destino en array destinos//
            const busquedaDestino = destinos.find(destino => destino.nombre === destinoFinal);

            if (busquedaDestino) {
                precioIda = busquedaDestino.precioIda;
                precioVuelta = busquedaDestino.precioVuelta;
            } else {
                alert("No se encuentra ese destino");
            }
            carrito.push(busquedaDestino.nombre)
        }
        elegirDestino();

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

        function valorSubtotal(pasajes, equipaje, mascota) {
            let subtotal;
            subtotal = Number(pasajes + equipaje + mascota)
            return subtotal
        }
        subtotal = valorSubtotal(valorPasajes, precioEquipaje, precioMascota)
        tazaAeropuerto = agregarTaza(subtotal);
        carrito.push(tazaAeropuerto);
        servicio = calcularGastos(subtotal);
        carrito.push(servicio);
        iva = sumarIva(subtotal);
        carrito.push(iva);
        console.log(carrito)

        total = subtotal + tazaAeropuerto + iva + servicio;
        
        carrito.push(total);
        alert("Resumen de su compra:\n" + carrito.join("\n $"))

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

    const equipajeExtra = equipajes.find(equipaje => (equipaje.id === sumarEquipaje))
    if (equipajeExtra) {
        precioEquipaje = equipajeExtra.precio;

    } else {
        alert("Usted viajara solo con equipaje de meno. Si se arrepiente puede comrpar su equipaje en el aeropuerto")
    }

    carrito.push(precioEquipaje);
    return precioEquipaje;
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
    return precioMascota;
}



comprarPasaje()