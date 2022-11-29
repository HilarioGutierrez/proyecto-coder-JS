let compraCarrito = [];
const carritoIva = document.getElementById("carritoIva");
const carritoTaza = document.getElementById("carritoTaza");
const pasajeCarrito = document.getElementById("pasajeCarrito");
const subtotalCarrito = document.getElementById("subtotalCarrito");
const totalCarrito = document.getElementById("totalCarrito");
const carritoFechaIda = document.getElementById("carritoFechaIda");
const sumarPasajero = document.getElementById("agregarPasajero");
const quitarPasajero = document.getElementById("quitarPasajero");
const cantidadPasajeros = document.getElementById("cantidadPasajeros");
const pasajerosCarrito = document.getElementById("pasajerosCarrito");
const btnConfirmPasajeros = document.getElementById("btnConfirmCantidadPasajeros");
const btnResetPasajeros = document.getElementById("btnResetPasajeros");
let cantidad = 0;
let cantidadCarrito = 0;
const equipaje23 = document.getElementById("equipaje23");
const equipaje12 = document.getElementById("equipaje12");
const equipaje10 = document.getElementById("equipaj10");
const equipajeNo = document.getElementById("equipajeNo");
const equipajeCarrito = document.getElementById("precioEquipajeCarrito");
const btnRestarEquipaje23 = document.getElementById("btnrestarEquipaje23");
const btnSumarEquipaje23 = document.getElementById("btnSumarEquipaje23");
const numeroContadorEquipaj23 = document.getElementById("numeroContadorEquipaje23");
const cantidadEquipaje23 = document.getElementById("cantidadEquipaje23");
let cantidadEquipaje23kg = 0;
const restarEquipaje23 = document.getElementById("restarEquipaje23");
const formulario = document.getElementById("formComprar");
const btnContinuar = document.getElementById("btnContinuar");

//---> CARGA DE PAGINA <---//
document.addEventListener("DOMContentLoaded", () =>{
document.removeEventListener;

    if (obtenerCarritoStorage("carrito")) {
    const carritoObtenido = obtenerCarritoStorage("carrito");
    alert(JSON.stringify(carritoObtenido))
    console.log(carritoObtenido)
}

})


//Pintar destino en resumen de compra//
const pintarCarrito = () => {
    const lugar = document.getElementById("seleccionarDestino");
    lugar.addEventListener("change", () => {
        const carrito = document.getElementById("destinoCarrito");
        const select = document.querySelector("#seleccionarDestino").value;
        const destinoFinal = destinos.find(destino => destino.nombre === select)
        carrito.innerText = `${destinoFinal.nombre}`;
        const radioVuelta = document.getElementById("IdaYVuelta");
        const radioIda = document.getElementById("Ida");
        radioIda.checked = false;
        radioVuelta.checked = false;
        cantidadPasajeros.innerText = `0`;
        pasajerosCarrito.innerText = `xxxxxxx`;
        cantidad = 0;
        carritoIva.innerText = `$0`
        carritoTaza.innerHTML = `$0`;
        pasajeCarrito.innerText = `$0`;
        subtotalCarrito.innerText = `$0`;
        totalCarrito.innerText = `$0`;
        carritoFechaIda.innerText = `xx/xx/xxxx`;
        equipajeCarrito.innerText = `$0`;

        //--->Event para cuando solo se selecciona Viajar Ida<---//
        const checkIda = destino => {
            const elegirIda = document.getElementById("Ida");
            elegirIda.addEventListener("click", () => {
                if (elegirIda.checked) {
                    const carritoPasajeIda = destino.precioIda
                    const elegirVuelta = document.getElementById("elegirVuelta");
                    const divVueta = document.createElement("div");
                    elegirVuelta.innerHTML = ``
                    elegirVuelta.appendChild(divVueta);

                    //--->Funcion para calcular la taza aeroportuaria (%) del subtotal de la cómpra. Producto del 5% del subtotal<---//
                    function agregarTaza(Aeropuerto) {
                        let tazaAeropuerto = Aeropuerto * 0.05
                        return tazaAeropuerto
                    }
                    const tazaAeroportuaria = agregarTaza(carritoPasajeIda);

                    //--->Funcion para calcular el IVA. Producto *1.21<---//
                    function sumarIva(monto) {
                        let iva = monto * 0.21

                        return iva
                    }
                    const iva = sumarIva(carritoPasajeIda)

                    //--->Funcion para obtener el subtotal del pasaje<---//
                    function valorSubtotal(pasajes, equipaje, mascota) {
                        let subtotal;
                        subtotal = Number(pasajes + equipaje + mascota)
                        return subtotal
                    }
                    const carritoSubtotal = valorSubtotal(iva, tazaAeroportuaria, carritoPasajeIda);


                    carritoIva.innerText = `${iva.toFixed(2)}`
                    carritoTaza.innerHTML = `${tazaAeroportuaria.toFixed(2)}`;
                    pasajeCarrito.innerText = `${carritoPasajeIda.toFixed(2)}`;
                    subtotalCarrito.innerText = `${carritoSubtotal.toFixed(2)}`;

                    const total = carritoSubtotal * cantidadCarrito;
                    totalCarrito.innerText = `${total.toFixed(2)}`;
                }
            })
        }
        checkIda(destinoFinal);

        //--->Funcion para crear nodo si el usuario selecciona Ida y Vuelta<---//
        const checkIdayVuelta = destino => {
            const elegirIdaVuelta = document.getElementById("IdaYVuelta");
            elegirIdaVuelta.addEventListener("click", () => {
                const pasajeCarrito = document.getElementById("pasajeCarrito");
                if (elegirIdaVuelta.checked) {
                    const carritoPasaje = destinoFinal.total;
                    const carritoPasajeTotal = destino.total
                    pasajeCarrito.innerText = `$${carritoPasajeTotal}`

                    const elegirVuelta = document.getElementById("elegirVuelta");
                    const divVueta = document.createElement("div");
                    divVueta.classList.add("fechaVolver")
                    elegirVuelta.innerHTML = `
                <label for="fechaVuelta">Elija la fecha de vuelta</label>
                    <input type="date" id="fechaVuelta" class="fechaVuelta rounded-2 m-1">
                `
                    elegirVuelta.appendChild(divVueta);

                    //funcion para pintar la fecha de vuelta<---//
                    const fechaVuelta = document.getElementById("fechaVuelta");
                    fechaVuelta.addEventListener("change", () => {
                        const carritoFechaVuelta = document.getElementById("carritoFechaVuelta");
                        carritoFechaVuelta.innerText = `- ${fechaVuelta.value}`;

                    })

                    //--->Funcion para calcular la taza aeroportuaria (%) del subtotal de la cómpra. Producto del 5% del subtotal<---//
                    function agregarTaza(Aeropuerto) {
                        let tazaAeropuerto = Aeropuerto * 0.05
                        return tazaAeropuerto
                    }
                    const tazaAeroportuaria = agregarTaza(carritoPasaje);
                    const carritoTaza = document.getElementById("carritoTaza");

                    //--->Funcion para calcular el IVA. Producto *1.21<---//
                    function sumarIva(monto) {
                        let iva = monto * 0.21

                        return iva
                    }
                    const iva = sumarIva(carritoPasaje)
                    const carritoIva = document.getElementById("carritoIva");

                    //--->Funcion para obtener el subtotal del pasaje<---//
                    function valorSubtotal(pasajes, equipaje, mascota) {
                        let subtotal;
                        subtotal = Number(pasajes + equipaje + mascota)
                        return subtotal
                    }
                    const carritoSubtotal = valorSubtotal(iva, tazaAeroportuaria, carritoPasaje)
                    const subtotalCarrito = document.getElementById("subtotalCarrito");

                    carritoIva.innerText = `${iva.toFixed(2)}`
                    carritoTaza.innerHTML = `${tazaAeroportuaria.toFixed(2)}`;
                    pasajeCarrito.innerText = `${carritoPasaje.toFixed(2)}`;
                    subtotalCarrito.innerText = `${carritoSubtotal.toFixed(2)}`;

                    const totalCarrito = document.getElementById("totalCarrito");

                    const total = carritoSubtotal * cantidadCarrito;
                    totalCarrito.innerText = `${total.toFixed(2)}`;
                }
            })
        }
        checkIdayVuelta(destinoFinal);

    })

    //--->Funcion para pintar en carrito fecha de ida<---//
    const pintarFechaIda = () => {
        const fechaIda = document.getElementById("fechaIda");

        fechaIda.addEventListener("change", () => {
            const fechaIdaValue = fechaIda.value;
            carritoFechaIda.innerText = `${fechaIdaValue}`
        })
    }
    pintarFechaIda();

}
pintarCarrito();

// Funciones para agregar o quitar pasajeros a contador<---//
const contadorPasajeros = () => {
    sumarPasajero.addEventListener("click", () => {
        if (cantidad >= 8) {
            Toastify({
                text: "Maximo 8 pasajeros",
                duration: 2500,
                backgroundColor: "#c23331",

            }).showToast();
            cantidad = 7
        }
        cantidad++
        actualizarCantidad();
        resetContadorPasajeros();
        confirmPasajeros();
    })

    quitarPasajero.addEventListener("click", () => {
        if (cantidad <= 0) {
            Toastify({
                icon: "warning",
                text: "Minimo 1 pasajero",
                duration: 2500,
                backgroundColor: "#a3fed2",
                style: {
                    color: "#000000"
                }

            }).showToast();
            cantidad = 1;
        }
        cantidad--
        actualizarCantidad();
        confirmPasajeros();
        resetContadorPasajeros();
    })
    //--->Funcion para actualizar el contador de pasajeros a medida que se suman o restan<---//
    const actualizarCantidad = () => {
        cantidadCarrito = cantidad;
        cantidadPasajeros.innerText = `${cantidadCarrito}`
        return cantidadCarrito;

    }

    // --->Pinta en carrito la cantidad de pasajeros confirmados<---//
    const confirmPasajeros = () => {
        btnConfirmPasajeros.addEventListener("click", () => {
            cantidadCarrito = cantidad;
            pasajerosCarrito.innerText = `${cantidadCarrito}`
            const radioVuelta = document.getElementById("IdaYVuelta");
            const radioIda = document.getElementById("Ida");
            radioIda.checked = false;
            radioVuelta.checked = false;
            carritoIva.innerText = `$0`
            carritoTaza.innerHTML = `$0`;
            pasajeCarrito.innerText = `$0`;
            subtotalCarrito.innerText = `$0`;
            totalCarrito.innerText = `$0`;
            carritoFechaIda.innerText = `xx/xx/xxxx`;
            equipajeCarrito.innerText = `$0`;

        });

    }

    //--->Funcion reset cantidad de pasajeros <---//
    const resetContadorPasajeros = () => {
        btnResetPasajeros.addEventListener("click", () => {
            cantidadPasajeros.innerText = `0`;
            pasajerosCarrito.innerText = `xxxxxxx`
            cantidad = 0;
            const radioVuelta = document.getElementById("IdaYVuelta");
            const radioIda = document.getElementById("Ida");
            radioIda.checked = false;
            radioVuelta.checked = false;
            carritoIva.innerText = `$0`
            carritoTaza.innerHTML = `$0`;
            pasajeCarrito.innerText = `$0`;
            subtotalCarrito.innerText = `$0`;
            totalCarrito.innerText = `$0`;
            carritoFechaIda.innerText = `xx/xx/xxxx`;
            equipajeCarrito.innerText = `$0`;
        });
    }
}
contadorPasajeros();
//--->Funcion para agregar al carrito el equipaje<---//
const agregarEquipaje = () => {
    let cantidadEquipaje = 0;
    let precioEquipaje = 0;
    const divEquipaje23 = document.getElementById("divEquipaje23");
    const valorBtn = document.getElementById("equipaje23").value;
    const BusquedaEquipaje = equipajes.find(equipaje => equipaje.id === valorBtn);
    //--->Equipaje 23kg<---//
    equipaje23.addEventListener("click", () => {
        divEquipaje23.innerHTML =
            `<span>${cantidadEquipaje}</span>`
        if (cantidadEquipaje <= cantidad) {
            equipajeCarrito.innerText = `${precioEquipaje}`;
            cantidadEquipaje++;
            precioEquipaje = (BusquedaEquipaje.precio * cantidadEquipaje);
        } else {
            cantidadEquipaje = cantidad;
            alert("Solo puede llevar 1 valijade este tipo x pasajero")
            divEquipaje23.innerHTML = `${cantidadEquipaje}`;
        }
        return BusquedaEquipaje

    })

    restarEquipaje23.addEventListener("click", () => {
        cantidadEquipaje--;
        equipajeCarrito.innerText = `$${(BusquedaEquipaje.precio * cantidadEquipaje)}`;

        divEquipaje23.innerText = `${cantidadEquipaje}`
        if (cantidadEquipaje < 0) {
            cantidadEquipaje = 0;
            divEquipaje23.innerText = `${cantidadEquipaje}`
            if (divEquipaje23 < 0) {

            }
        }
    })

}
agregarEquipaje();

const AgregarMascota = () => {

}
AgregarMascota();

//--->Evento cuando se recarga la pagina<---//
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    //--->Funcion para guardar array de carrito<---//
    const guardarCarrito= ()=>{
    const destinoNuevo = document.getElementById("seleccionarDestino").value;
    const idaFecha = document.getElementById("fechaIda");
    const vueltaFecha = document.getElementById("carritoFechaVuelta");
    const precio = document.getElementById("pasajeCarrito");
    const equipaje = document.getElementById("precioEquipajeCarrito");
    const mascota = document.getElementById("carritoMascota");
    const taza = document.getElementById("carritoTaza");
    const ivaObjeto = document.getElementById("carritoIva");
    const subtotalObjeto = document.getElementById("subtotalCarrito");
    const totalObjeto = document.getElementById("totalCarrito");
    
    //--->array objeto de carrito<---//
    const carritoCompra = [
        {
            destino: destinoNuevo,
            pasajeros: cantidad,
            fechaIda: idaFecha.value,
            fechaVuelta: vueltaFecha.textContent,
            precio: Number(precio.textContent),
            equipaje: Number(equipaje.textContent),
            mascota: Number(mascota.textContent),
            tazaAeropuerto: Number(taza.textContent),
            iva: Number(ivaObjeto.textContent),
            subtotal: Number(subtotalObjeto.textContent),
            total: Number(totalObjeto.textContent)
        }
    ]
    console.log(carritoCompra),
        guardarCarritoStorage(carritoCompra);
        return carritoCompra
    }

    guardarCarrito()
    //--->Funcion para vaciar carrito y array si se aprieta btn VACIAR CARRITO<---//
    const VaciarCarrito = document.getElementById("vaciarCarrito");
    VaciarCarrito.addEventListener("click", () => {
        carritoCompra.splice(0, 9)
        const carritoDestino = document.getElementById("destinoCarrito");
        const radioVuelta = document.getElementById("IdaYVuelta");
        const radioIda = document.getElementById("Ida");
        radioIda.checked = false;
        radioVuelta.checked = false;
        carritoDestino.innerText = `xxxxxxx`
        pasajerosCarrito.innerText = `xxxxxxx`
        carritoIva.innerText = `$0`
        carritoTaza.innerHTML = `$0`;
        pasajeCarrito.innerText = `$0`;
        subtotalCarrito.innerText = `$0`;
        totalCarrito.innerText = `$0`;
        carritoFechaIda.innerText = `xx/xx/xxxx`;
        equipajeCarrito.innerText = `$0`;
        alert("El carrito esta vacio")
        console.log(carritoCompra)
    });
})



//funciones de storage
const guardarCarritoStorage = (carritoDeCompras) => {
    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
};

const obtenerCarritoStorage = (clave) => {
    const carritoStorage = JSON.parse(localStorage.getItem(clave));
    return carritoStorage;
}

