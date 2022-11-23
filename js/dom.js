
//Pintar destino en resumen de compra//
const pintarCarrito = () => {
    const lugar = document.getElementById("seleccionarDestino");
    lugar.addEventListener("change", () => {
        const carrito = document.getElementById("destinoCarrito");
        const select = document.querySelector("#seleccionarDestino").value;
        const destinoFinal = destinos.find(destino => destino.nombre === select)
        carrito.innerText = `${destinoFinal.nombre}`;

        const elegirIdaYVuelta = document.getElementById("IdaYVuelta");
        elegirIdaYVuelta.addEventListener("click", () => {
            const pasajeCarrito = document.getElementById("pasajeCarrito");
            if (elegirIdaYVuelta.checked) {
                const carritoPasajeTotal = destinoFinal.total
                pasajeCarrito.innerText = `$${carritoPasajeTotal}`
            }


        })

        const elegirIda = document.getElementById("Ida");
        elegirIda.addEventListener("click", () => {
            const pasajeCarrito = document.getElementById("pasajeCarrito");
            if (elegirIda.checked) {
                const carritoPasajeIda = destinoFinal.precioIda

                const elegirVuelta =document.getElementById("elegirVuelta");
                const divVueta = document.createElement("div");
                elegirVuelta.innerHTML = ``      
                elegirVuelta.appendChild(divVueta); 

                //--->Funcion para calcular la taza aeroportuaria (%) del subtotal de la cómpra. Producto del 5% del subtotal<---//
                function agregarTaza(Aeropuerto) {
                    let tazaAeropuerto = Aeropuerto * 0.05
                    return tazaAeropuerto
                }
                const tazaAeroportuaria = agregarTaza(carritoPasajeIda);
                const carritoTaza = document.getElementById("carritoTaza");

                //--->Funcion para calcular el IVA. Producto *1.21<---//
                function sumarIva(monto) {
                    let iva = monto * 0.21

                    return iva
                }
                const iva = sumarIva(carritoPasajeIda)
                const carritoIva = document.getElementById("carritoIva");

                //--->Funcion para obtener el subtotal del pasaje<---//
                function valorSubtotal(pasajes, equipaje, mascota) {
                    let subtotal;
                    subtotal = Number(pasajes + equipaje + mascota)
                    return subtotal
                }
                const carritoSubtotal = valorSubtotal(iva, tazaAeroportuaria, carritoPasajeIda)
                const subtotalCarrito = document.getElementById("subtotalCarrito");

                carritoIva.innerText = `$${iva}`
                carritoTaza.innerHTML = `$${tazaAeroportuaria}`;
                pasajeCarrito.innerText = `$${carritoPasajeIda}`;
                subtotalCarrito.innerText = `$${carritoSubtotal.toFixed(2)}`;
            }
        })

        const elegirIdaVuelta = document.getElementById("IdaYVuelta");
        elegirIdaVuelta.addEventListener("click", () => {
            const pasajeCarrito = document.getElementById("pasajeCarrito");
            if (elegirIdaVuelta.checked) {
                const carritoPasaje = destinoFinal.total;

                const elegirVuelta =document.getElementById("elegirVuelta");
                const divVueta = document.createElement("div");
                elegirVuelta.innerHTML = `
                <label for="fechaVuelta">Elija la fecha de vuelta</label>
                    <input type="date" id="fechaVuelta" class="fechaVuelta rounded-2 m-1">
                `      
                elegirVuelta.appendChild(divVueta);          

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

                carritoIva.innerText = `$${iva}`
                carritoTaza.innerHTML = `$${tazaAeroportuaria}`;
                pasajeCarrito.innerText = `$${carritoPasaje}`;
                subtotalCarrito.innerText = `$${carritoSubtotal.toFixed(2)}`;
            }
        })

    })

    const pintarFechaIda = () => {
        const fechaIda = document.getElementById("fechaIda");
        fechaIda.addEventListener("change", () => {
            const carritoFechaIda = document.getElementById("carritoFechaIda");
            carritoFechaIda.innerText = `${fechaIda.value}`
        })
    }
    const pintarFechaVuelta = () => {
        const fechaVuelta = document.querySelectorAll("#fechaVuelta");
        fechaVuelta.addEventListener("change", () => {
            const carritoFechaVuelta = document.getElementById("carritoFechaVuelta");
            carritoFechaVuelta.innerText = `- ${fechaVuelta.value}`;
        }


        )
    }
    pintarFechaVuelta();
    pintarFechaIda();
    
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


pintarCarrito();





