
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
            destinoFinal = prompt("Elija uno de nuestros 4 destinos:\n Mendoza\n Bariloche\n Misiones\n Cordoba\n", "Escriba el destino").toUpperCase();

            class EleccionDestino {
                constructor(destino, Ida, Vuelta) {
                    this.nombre = destino.toUpperCase();
                    this.precioIda = Number(Ida);
                    this.precioVuelta = Number(Vuelta);

                }

            }
            //--->OBJETOS DESTINOS<---//
            const destinos = [];

            const mendoza = new EleccionDestino("MENDOZA", 6999, 5649);
            const misiones = new EleccionDestino("MISIONES", 6455, 5000);
            const bariloche = new EleccionDestino("BARILOCHE", 12300, 10500);
            const cordoba = new EleccionDestino("CORDOBA", 13187, 24861);

            destinos.push(mendoza, misiones, bariloche, cordoba);

            switch (destinoFinal) {
                case "MENDOZA":
                    mendoza;
                    precioIda = mendoza.precioIda;
                    precioVuelta = mendoza.precioVuelta;
                    console.log(destinos[0]);
                    break;
                case "MISIONES":
                    precioIda = misiones.precioIda;
                    precioVuelta = misiones.precioVuelta;
                    console.log(destinos[1]);
                    break;
                case "BARILOCHE":
                    precioIda = bariloche.precioIda;
                    precioVuelta = bariloche.precioVuelta;
                    console.log(destinos[2]);
                    break;
                case "CORDOBA":
                    precioIda = cordoba.precioIda;
                    precioVuelta = cordoba.precioVuelta;
                    console.log(destinos[3]);
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

}

function agregarEquipaje() {
    let equipaje = 0;
    const precioEquipaje = [];

    class ElegirEquipaje {
        constructor(precio) {
            this.precioEquipaje = Number(precio);
        }
    }

    const valija23 = new ElegirEquipaje(3399);
    const valija12 = new ElegirEquipaje(2599);
    const valija10 = new ElegirEquipaje(2399);
    const valijaNo = new ElegirEquipaje(0)
        ;

    equipaje = parseInt(prompt("Desea agregar equipaje?\n 1-Bodega 23kg $3399\n 2-Bodega 12kg $2599\n 3-En cabina 10kg $2399\n 4-No deseo agregar equipaje", "Escriba el numero de la opcion que desee"));

    switch (equipaje) {
        case 1:
            valija23.precioEquipaje;
            confirm("usted selecciono MALETA EN BODEGA DE 23KG $"+valija23.precioEquipaje );
            break;
        case 2:
            valija12.precioEquipaje;
            confirm("usted selecciono MALETA EN BODEGA DE 12KG $"+valija12.precioEquipaje);
            break;
        case 3:
            valija10.precioEquipaje;
            confirm("usted selecciono MALETA EN CABINA DE 10KG $"+valija10.precioEquipaje);
            break;
        case 4:
            valijaNo.precioEquipaje;
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
    let precioMascota = 0;
    let pesoMascota = 0;

    mascota = prompt("Viaja con su mascota?", "si o no").toLowerCase();
//AGREGAR CONFIRMACION DE VAJAR CON MASCOTA PARA SUMAR O NO AL FINAL//
//AGREGAR CONFIRMACION DE VAJAR CON MASCOTA PARA SUMAR O NO AL FINAL//
//AGREGAR CONFIRMACION DE VAJAR CON MASCOTA PARA SUMAR O NO AL FINAL//

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