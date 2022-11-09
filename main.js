const carrito = [];
let valorPasajes;
let precioEquipaje;
let precioMascota;
let subtotal;
let total;
registrarNombre();

//--->Funcion principal para comprar pasajes. Tiene otras funciones dentro que complementan el proceso de compra <---//
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

        //--->Funcion para elegir los destinos disponibles, busca destinos en array de objetos y otorga valor a precioIda y precioVuelta<---//
        function elegirDestino() {

            destinoFinal = prompt("Elija uno de nuestros 4 destinos:\n Mendoza\n Bariloche\n Iguazu\n Cordoba\n", "Escriba el destino").toUpperCase();

            //--->Busqueda del destino en array destinos<---//
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
        alert("El valor del pasaje de ida a " + destinoFinal + " es de $" + precioIda)

        let precioIdaYVuelta = comrparIdaYVuelta(precioIda, precioVuelta);

        //---> Elegir si viajar ida y vuelta o solo ida <---//
        function comprarVuelta() {
            valorPasajes = 0;
            idaYVuelta = prompt("Desea comprar el pasaje de vuelta?", "Escriba si o no").toLowerCase();
            //---> IF anidado para calcular el valor del pasaje si es ida y vuelta o solo ida <---//
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
        //--->Llama funcion para agregar equipaje<---//
        agregarEquipaje();
        //--->Llama funcion para elegir viajar con una mascota<---//
        viajarConMascota();
        //--->Funcion para obtener el subtotal del pasaje, sumando los valores obtenidos en destino, tipo de pasaje, equipaje y mascota<---//
        function valorSubtotal(pasajes, equipaje, mascota) {
            let subtotal;
            subtotal = Number(pasajes + equipaje + mascota)
            return subtotal
        }
        subtotal = valorSubtotal(valorPasajes, precioEquipaje, precioMascota)

        tazaAeropuerto = Number(agregarTaza(subtotal).toFixed(2));
        carrito.push(tazaAeropuerto);
        servicio = Number(calcularGastos(subtotal).toFixed(2));
        carrito.push(servicio);
        iva = sumarIva(subtotal);
        carrito.push(iva);
        console.log(carrito)

        total = subtotal + tazaAeropuerto + iva + servicio;
        total = Number(total.toFixed(2))
        carrito.push(total);
        //--->Muestra resumen de compra detallado con salto de linea<---//
        alert("Resumen de su compra:\n" + carrito.join("\n $"))

        seguirComprando = confirm("Quiere comprar otro pasaje?");

    } while (seguirComprando) {
        alert("Gracias por visitarnos")
    }
}
//--->Funcion para calcular sumar 2 valores. En este caso utilizado para calcular pasajes ida y vuelta<---//
function comrparIdaYVuelta(precioIda, precioVuelta) {

    return precioIda + precioVuelta
}
//--->Funcion para calcular la taza aeroportuaria (%) del subtotal de la compra. Producto del 5% del subtotal<---//
function agregarTaza(Aeropuerto) {
    let tazaAeropuerto = Aeropuerto * 0.05
    return tazaAeropuerto
}
//--->Funcion para calcular la costo del servicio. producto del 10% del subtotal<---//
function calcularGastos(servicios) {
    let servicio = servicios * 0.10;
    return servicio;
}
//--->Funcion para calcular el IVA. Producto *1.21<---//
function sumarIva(monto) {
    let iva = monto * 0.21

    return iva
}

function registrarNombre() {

}
//--->Funcion para agregar equipaje. Con find busca en array de equipaje la conincidencia para darle valor a variable precioEquipaje<---//
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
//--->Funcion para agregar agregar mascota. Calcula variable precioMascota si el peso de la mascota es <> a 18kg<---//
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

            } else {
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
//--->Funcion ordenar alfabeticamente los destinos<---//
const ordenarAlfabeticamente = () => {
    destinos.sort((a, b) => a.nombre > b.nombre);
    mostrarAlfabeticamente();
}
//--->Funcion nombrar lista ordenada<---//
const mostrarAlfabeticamente = () => {
    let ordenDeAaZ = [];
    destinos.forEach(destino => ordenDeAaZ.push(`${destino.nombre}: $${destino.precioIda} + $${destino.precioVuelta} = $${destino.total}`))
    alert("Lista de precios: Destino - Precio ida - Precio vuelta - Total\n" + "\n" + ordenDeAaZ.join("\n"));
}
//--->Funcion para aplicar el orden alfabetico y mostrarlo por alert<---//
function ordenar() {
    const orden = confirm("Quiere ver los destinos ordenados alfabeticamente?");
    if (orden) {
        ordenarAlfabeticamente();
    } else {
        alert("Empecemos la compra!")
    }
}

ordenar();
comprarPasaje();