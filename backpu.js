function comprarPasaje() {
    let destinoFinal;
    let idaYVuelta;
    let precioIda;
    let precioVuelta;
    let seguirComprando;
    let tazaAeropuerto;
    let servicio;
    let total;
    do {
        destinoFinal = "";
        idaYVuelta = "";
        precioIda = 0;
        precioVuelta = 0;
        seguirComprando = false;
        tazaAeropuerto = 0;
        servicio = 0;
        total = 0;


        //---> filtro para ver los destinos que tengan un valor inferior a $18000 <---//
        const cuantoQuiereGastar = destinosAumento.filter(destino => destino.total < 18000)
        console.log(cuantoQuiereGastar);

        destinoFinal = prompt("Elija uno de nuestros 4 destinos:\n Mendoza\n Bariloche\n Iguazu\n Cordoba\n", "Escriba el destino").toUpperCase();

        //Busqueda del destino en array destinos//
        const busquedaDestino = destinos.find(destino => destino.nombre === destinoFinal);

        if (busquedaDestino) {
            precioIda = busquedaDestino.precioIda;
        } else {
            alert("No se encuentra ese destino");
        }

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
        }
        comprarVuelta();

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

        agregarEquipaje();

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

        viajarConMascota();

        function agregarTaza(Aeropuerto) {
            let tazaAeropuerto = Aeropuerto % 90
            return tazaAeropuerto
        }
        agregarTaza(valorPasajes);

        function calcularGastos(servicios) {
            let servicio = servicios * 0.10;
            return servicio;
        }

        calcularGastos(valorPasajes);

        function sumarIva(monto) {
            let iva = monto * 0.21

            return iva
        }

        sumarIva(valorPasajes);

    } while (seguirComprando) {
        comprarVuelta()
    }
}


// function comrparIdaYVuelta(precioIda, precioVuelta) {

//     return precioIda + precioVuelta
// }



function registrarNombre() {

}

comprarPasaje();