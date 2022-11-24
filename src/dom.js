const carritoCompra = [];


//Pintar destino en resumen de compra//
const pintarCarrito = () => {
    const lugar = document.getElementById("seleccionarDestino");
    lugar.addEventListener("change", () => {
        const carrito = document.getElementById("destinoCarrito");
        const select = document.querySelector("#seleccionarDestino").value;
        const destinoFinal = destinos.find(destino => destino.nombre === select)
        carrito.innerText = `${destinoFinal.nombre}`;

        carritoCompra.push(destinoFinal.nombre);


        const elegirIdaYVuelta = document.getElementById("IdaYVuelta");
        elegirIdaYVuelta.addEventListener("click", () => {
            const pasajeCarrito = document.getElementById("pasajeCarrito");
            if (elegirIdaYVuelta.checked) {
                const carritoPasajeTotal = destinoFinal.total
                pasajeCarrito.innerText = `$${carritoPasajeTotal}`
                carritoCompra.push(destinoFinal.total)
            }
            //hacer getElement .value para tener lainfo ingresada en fecha asi se puede guardar en array
        })


        //--->Event para cuando solo se selecciona Viajar Ida<---//
        const elegirIda = document.getElementById("Ida");
        elegirIda.addEventListener("click", () => {
            const pasajeCarrito = document.getElementById("pasajeCarrito");
            if (elegirIda.checked) {
                const carritoPasajeIda = destinoFinal.precioIda
                carritoCompra.push(destinoFinal.precioIda)

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
                carritoCompra.push(tazaAeroportuaria)
                const carritoTaza = document.getElementById("carritoTaza");

                //--->Funcion para calcular el IVA. Producto *1.21<---//
                function sumarIva(monto) {
                    let iva = monto * 0.21

                    return iva
                }
                const iva = sumarIva(carritoPasajeIda)
                carritoCompra.push(iva)
                const carritoIva = document.getElementById("carritoIva");

                //--->Funcion para obtener el subtotal del pasaje<---//
                function valorSubtotal(pasajes, equipaje, mascota) {
                    let subtotal;
                    subtotal = Number(pasajes + equipaje + mascota)
                    return subtotal
                }
                const carritoSubtotal = valorSubtotal(iva, tazaAeroportuaria, carritoPasajeIda);

                const subtotalCarrito = document.getElementById("subtotalCarrito");

                carritoIva.innerText = `$${iva}`
                carritoTaza.innerHTML = `$${tazaAeroportuaria}`;
                pasajeCarrito.innerText = `$${carritoPasajeIda}`;
                subtotalCarrito.innerText = `$${carritoSubtotal.toFixed(2)}`;
                const totalCarrito = document.getElementById("totalCarrito");
                
                const total = carritoSubtotal * cantidadCarrito;
                totalCarrito.innerText = `$${total}`;
            }
        })
        //--->Funcion para crear nodo si el usuario selecciona Ida y Vuelta<---//
        const elegirIdaVuelta = document.getElementById("IdaYVuelta");
        elegirIdaVuelta.addEventListener("click", () => {
            const pasajeCarrito = document.getElementById("pasajeCarrito");
            if (elegirIdaVuelta.checked) {
                const carritoPasaje = destinoFinal.total;

                const elegirVuelta = document.getElementById("elegirVuelta");
                const divVueta = document.createElement("div");
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

                carritoIva.innerText = `$${iva.toFixed(2)}`
                carritoTaza.innerHTML = `$${tazaAeroportuaria.toFixed(2)}`;
                pasajeCarrito.innerText = `$${carritoPasaje.toFixed(2)}`;
                subtotalCarrito.innerText = `$${carritoSubtotal.toFixed(2)}`;

                const totalCarrito = document.getElementById("totalCarrito");
                
                    const total = carritoSubtotal * cantidadCarrito;
                    totalCarrito.innerText = `$${total}`;
            }
        })
        console.log(carritoCompra);
    })

    //--->Funcion para pintar en carrito fecha de ida<---//
    const pintarFechaIda = () => {
        const fechaIda = document.getElementById("fechaIda");
        fechaIda.addEventListener("change", () => {
            const carritoFechaIda = document.getElementById("carritoFechaIda");
            carritoFechaIda.innerText = `${fechaIda.value}`
        })
    
    }


    pintarFechaIda();



}
pintarCarrito();

// Funciones para agregar o quitar pasajeros a contador<---//
const sumarPasajero = document.getElementById("agregarPasajero");
const quitarPasajero = document.getElementById("quitarPasajero");
const cantidadPasajeros = document.getElementById("cantidadPasajeros");
const pasajerosCarrito = document.getElementById("pasajerosCarrito");
const btnConfirmPasajeros = document.getElementById("btnConfirmCantidadPasajeros");
const btnResetPasajeros = document.getElementById("btnResetPasajeros");
let cantidad = 0;
let cantidadCarrito = 0;

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
    cantidadPasajeros.innerText = `${cantidad}`
}

// --->Pinta en carrito la cantidad de pasajeros confirmados<---//
const confirmPasajeros = () => {
    btnConfirmPasajeros.addEventListener("click", () => {
        cantidadCarrito = cantidad;
        pasajerosCarrito.innerText = `${cantidadCarrito}`
    });
}

//--->Funcion reset cantidad de pasajeros <---//
const resetContadorPasajeros = () => {
    btnResetPasajeros.addEventListener("click", () => {
        cantidadPasajeros.innerText = `0`;
        pasajerosCarrito.innerText = `xxxxxxx`
        cantidad = 0;
    });
}

//Pintar nombre y apellido del pasajero//
// const pintarPasajero = () => {
//     const nombre1 = document.getElementById("nombrePasajero1");
//     nombre1.addEventListener("change", () => {
//         const carritoPasajero1 = document.getElementById("carritoPasajero1");
//         apellido();
//         carritoPasajero1.innerText = `${nombre1.value}`
//         const apellido = () => {
//             const apellido1 = document.getElementById("apellidoPasajero1");
//             apellido1.addEventListener("change", () => {
//                 const carritoApellido1 = document.getElementById("carritoPasajero1");
//                 carritoApellido1.innerText = `${apellido1.value}`
//             })
//         }

//     })
// }








