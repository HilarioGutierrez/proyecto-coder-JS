
//---> INICIO DE SESION <---//

//mejorar array de usuarios. para que queden guardados y no se borren cuando termina el ciclo.
//mejorar array de usuarios. para que queden guardados y no se borren cuando termina el ciclo.
//mejorar array de usuarios. para que queden guardados y no se borren cuando termina el ciclo.

registrarNombre();

//--->PROCEDIMIENTO COMPRAR PASAJES<---//
function comprarPasaje() {
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
            //--->OBJETOS DESTINOS<---//
            const destinos = [];

            const destino1 = new EleccionDestino("MEMDNOZA", 6999, 5649);
            const destino2 = new EleccionDestino("MISIONES", 6455, 5000);
            const destino3 = new EleccionDestino("BARILOCHE", 12300, 10500);
            const destino4 = new EleccionDestino("CORDOBA", 13187, 24861)

            destinos.push(destino1, destino2, destino3, destino4);
            console.log(destinos);

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
            }
        }
        elegirIdaYVuelta();

        agregarEquipaje();

        viajarConMascota();

        // AGREGAR CUANTOS PASAJEROS VAN A HACER
        // AGREGAR CUANTOS PASAJEROS VAN A HACER
        // AGREGAR CUANTOS PASAJEROS VAN A HACER
        // ARRAY DE PASAJEROS

        //--->GASTOS<---//

        tazaAeropuerto = agregarTaza(subtotal);
        servicio = calcularGastos(subtotal);
        iva = sumarIva(subtotal);
        costoPrecioFinal = calcularFinal(subtotal, servicio, tazaAeropuerto, iva);

        console.log(destinoFinal);
        console.log(costoPrecioFinal)

        //ACTUALIZAR RESUMEN DE COMPRA CON TODOS LOS DATOS NECESARIOS//
        //ACTUALIZAR RESUMEN DE COMPRA CON TODOS LOS DATOS NECESARIOS//
        //ACTUALIZAR RESUMEN DE COMPRA CON TODOS LOS DATOS NECESARIOS//
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

function registrarNombre() {
    const usuarios = [];

    let nuevoUsuario = prompt("Ingrese su nombre y apellido para comenzar con la compra").toUpperCase();

    do {
        if (nuevoUsuario === "") {
            alert("El nombre ingresado ya existe, ingrese otro. ");
            registrarNombre();
        }
    } while (usuarios.includes(nuevoUsuario));
    usuarios.push(nuevoUsuario);
    console.log(usuarios);

    alert("Bienvenido " + nuevoUsuario + ". Comencemos la compra!")
}

function agregarEquipaje() {
    let equipaje = 0;
    let precioEquipaje;
    ;

    equipaje = parseInt(prompt("Desea agregar equipaje?\n 1-Bodega 23kg $3399\n 2-Bodega 12kg $2599\n 3-En cabina 10kg $2399\n 4-No deseo agregar equipaje", "Escriba el numero de la opcion que desee"));

    switch (equipaje) {
        case 1:
            precioEquipaje = 3399;
            confirm("usted selecciono MALETA EN BODEGA DE 23KG $3399");
            break;
        case 2:
            precioEquipaje = 2599;
            confirm("usted selecciono MALETA EN BODEGA DE 12KG $2599");
            break;
        case 3:
            precioEquipaje = 2399;
            confirm("usted selecciono MALETA EN CABINA DE 10KG $2399");
            break;
        case 4:
            confirm("Usted viajara solo con equipaje de mano. Si se arrepiente puede abonar el equipaje extran en el aeropuerto")
            break;
        default:
            alert("No ha elegido una opcion correcta, intente nuevamente. Gracias")
            precioEquipaje = 0;
            equipaje = 0;
            agregarEquipaje();
            break;
    }
}

function viajarConMascota() {
    let mascota = "";
    let precioMascota;
    let pesoMascota = 0;
    //hacer bucle for para conteo de capacidad de mascotas en el avion
    //hacer bucle for para conteo de capacidad de mascotas en el avion
    //hacer bucle for para conteo de capacidad de mascotas en el avion
    mascota = prompt("Somos una aerolinea pet friendly, en cabina tenemos capacidad para viajar con 15 mascotas, mientas que en bodega contamos con 20 lugares mas para nuestoros amigos peludos.\n\n Desea viajar con su mascota?", "si o no").toLowerCase();

    switch (mascota) {
        case "si":
            pesoMascota = Number(prompt("cuanto pesa su mascota?"));
            if (pesoMascota <= 18) {
                alert("Su mascota puede viajar en cabina por un costo de $5000 extra")
                precioMascota = 5000;
            }
            if (pesoMascota > 18) {
                alert("Su mascota pesa mas de 18KG. Solo puede viajar en bodega por un costo de $4000 extra")
                precioMascota = 4000;
            }
            break;
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
}

comprarPasaje()