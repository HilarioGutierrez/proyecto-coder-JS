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
const btnRestarEquipaje23 = document.getElementById("btnrestarEquipaje23");
const btnSumarEquipaje23 = document.getElementById("btnSumarEquipaje23");
const numeroContadorEquipaj23 = document.getElementById("numeroContadorEquipaje23");
const cantidadEquipaje23 = document.getElementById("cantidadEquipaje23");
let cantidadEquipaje23kg = 0;
const restarEquipaje23 = document.getElementById("restarEquipaje23");
const formulario = document.getElementById("formComprar");
const btnContinuar = document.getElementById("btnContinuar");
const equipajeCarrito = document.getElementById("precioEquipajeCarrito");
const carritoMascota = document.getElementById("carritoMascota");
const carritoFechaVuelta = document.getElementById("carritoFechaVuelta");

//Pintar destino en resumen de compra//
const pintarCarrito = () => {
    const select = document.querySelector("#seleccionarDestino").value;
    const pedidoDatos = async () => {
        const data = await pedidoDestinos()
        const destinoFinal = data.find(destino => destino.nombre === select);
        const lugar = document.getElementById("seleccionarDestino");
        lugar.addEventListener("change", async () => {
            const select = document.querySelector("#seleccionarDestino").value;
            const data = await pedidoDestinos()
            const destinoFinal = data.find(destino => destino.nombre === select);
            const carrito = document.getElementById("destinoCarrito");
            carrito.innerText = `${destinoFinal.nombre}`;
            const radioVuelta = document.getElementById("IdaYVuelta");
            const radioIda = document.getElementById("Ida");
            radioIda.checked = false;
            radioVuelta.checked = false;
            cantidadPasajeros.innerText = `0`;
            pasajerosCarrito.innerText = `xxxxxxx`;
            cantidad = 0;
            carritoIva.innerText = `0`
            carritoTaza.innerHTML = `0`;
            pasajeCarrito.innerText = `0`;
            subtotalCarrito.innerText = `0`;
            totalCarrito.innerText = `0`;
            carritoFechaIda.innerText = `xx/xx/xxxx`;
            equipajeCarrito.innerText = `0`;
            carritoMascota.innerText = `0`;

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

                        const tazaAeroportuaria = agregarTaza(carritoPasajeIda);

                        const iva = sumarIva(carritoPasajeIda)

                        const carritoSubtotal = valorSubtotal(iva, tazaAeroportuaria, carritoPasajeIda, Number(equipajeCarrito),Number(carritoMascota));

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
                        const carritoPasaje = destino.total
                        pasajeCarrito.innerText = `$${carritoPasaje}`

                        const elegirVuelta = document.getElementById("elegirVuelta");
                        const divVueta = document.createElement("div");
                        divVueta.classList.add("fechaVolver")
                        elegirVuelta.innerHTML = `
                <label for="fechaVuelta">Elija la fecha de vuelta</label>
                    <input type="date" id="fechaVuelta" min="2022-11-28" max="2023-02-28" class="fechaVuelta rounded-2 m-1">
                `
                        elegirVuelta.appendChild(divVueta);

                        //funcion para pintar la fecha de vuelta<---//
                        const fechaVuelta = document.getElementById("fechaVuelta");
                        fechaVuelta.addEventListener("change", () => {
                            carritoFechaVuelta.innerText = `- ${fechaVuelta.value}`;

                        })

                        const tazaAeroportuaria = agregarTaza(carritoPasaje);

                        const iva = sumarIva(carritoPasaje)

                        let carritoSubtotal = valorSubtotal(iva, tazaAeroportuaria, carritoPasaje, 0, 0)

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
            carritoVacio();

        })
    }
    pedidoDatos();
    //--->Funcion para pintar en carrito fecha de ida<---//
    const pintarFechaIda = () => {
        const fechaIda = document.getElementById("fechaIda");

        fechaIda.addEventListener("change", () => {
            const fechaIdaValue = fechaIda.value;
            carritoFechaIda.innerText = `${fechaIdaValue}`
        })
    }
    pintarFechaIda();
    pedidoDatos();
}
pintarCarrito();

// Funciones para agregar o quitar pasajeros a contador<---//
function contadorPasajeros() {
    sumarPasajero.addEventListener("click", () => {
        if (cantidad >= 8) {
            Toastify({
                text: "Maximo 8 pasajeros",
                duration: 2500,
                backgroundColor: "#c23331",
            }).showToast();
            cantidad = 7;
        }
        cantidad++;
        actualizarCantidad();
        resetContadorPasajeros();
        confirmPasajeros();
    });

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
        cantidad--;
        actualizarCantidad();
        confirmPasajeros();
        resetContadorPasajeros();
    });
    //--->Funcion para actualizar el contador de pasajeros a medida que se suman o restan<---//
    const actualizarCantidad = () => {
        cantidadCarrito = cantidad;
        cantidadPasajeros.innerText = `${cantidadCarrito}`;
        return cantidadCarrito;
    };

    // --->Pinta en carrito la cantidad de pasajeros confirmados<---//
    const confirmPasajeros = () => {
        btnConfirmPasajeros.addEventListener("click", () => {
            cantidadCarrito = cantidad;
            pasajerosCarrito.innerText = `${cantidadCarrito}`;
            const radioVuelta = document.getElementById("IdaYVuelta");
            const radioIda = document.getElementById("Ida");
            radioIda.checked = false;
            radioVuelta.checked = false;
            carritoIva.innerText = `0`;
            carritoTaza.innerHTML = `0`;
            pasajeCarrito.innerText = `0`;
            subtotalCarrito.innerText = `0`;
            totalCarrito.innerText = `0`;
            carritoFechaIda.innerText = `xx/xx/xxxx`;
            carritoFechaVuelta.innerText = `xx/xx/xxxx`;
            equipajeCarrito.innerText = `0`;
            carritoMascota.innerText = `0`;
        });
    };

    //--->Funcion reset cantidad de pasajeros <---//
    const resetContadorPasajeros = () => {
        btnResetPasajeros.addEventListener("click", () => {
            cantidadPasajeros.innerText = `0`;
            pasajerosCarrito.innerText = `xxxxxxx`;
            cantidad = 0;
            const radioVuelta = document.getElementById("IdaYVuelta");
            const radioIda = document.getElementById("Ida");
            radioIda.checked = false;
            radioVuelta.checked = false;
            carritoIva.innerText = `0`;
            carritoTaza.innerHTML = `0`;
            pasajeCarrito.innerText = `0`;
            subtotalCarrito.innerText = `0`;
            totalCarrito.innerText = `0`;
            carritoFechaIda.innerText = `xx/xx/xxxx`;
            carritoFechaVuelta.innerText = `xx/xx/xxxx`;
            equipajeCarrito.innerText = `0`;
            carritoMascota.innerText = `0`;
        });
    };
}
contadorPasajeros();
//--->Funcion para agregar al carrito el equipaje<---//
const agregarEquipaje = () => {
    let cantidadEquipaje23 = 0;
    let cantidadEquipaje12 = 0;
    let cantidadEquipaje10 = 0;
    let cantidadEquipaje0 = 0;
    let precioEquipaje23 = 0;
    let precioEquipaje12 = 0;
    let precioEquipaje10 = 0;
    let precioEquipaje0 = 0;


    //--->Equipaje 23kg<---//
    const agregarEquipaje23 = () => {
        const inputEquipaje23 = document.getElementById("inputEquipaje23");

        const Equipajecantidad = () => {
            inputEquipaje23.addEventListener("change", () => {
                cantidadEquipaje23 = inputEquipaje23.valueAsNumber
            })
        }
        Equipajecantidad();

        const ConfirmarEquipaje23 = () => {
            const btnConfirmEquipaje23 = document.getElementById("confirmar23");
            const busquedaEquipaje = equipajes.find(equipaje => equipaje.id === btnConfirmEquipaje23.value);
            ;
            btnConfirmEquipaje23.addEventListener("click", () => {
                precioEquipaje23 = busquedaEquipaje.precio * cantidadEquipaje23;

                cantidadEquipaje23 > cantidadCarrito ? Swal.fire({
                    icon: "warning",
                    title: "LLeva mucho equipaje :(",
                    text: "Solo esta permitido 1 equipaje de 23kg por pasajero",
                }) : Swal.fire({
                    icon: "success",
                    title: "Agrando su equipaje!!",
                    text: `Agrego con exito su equipaje de 12kg. Cantidad agregada: ${cantidadEquipaje23}`,
                })
                equipajeCarrito.innerText = `${precioEquipaje23 + precioEquipaje12 + precioEquipaje10 + precioEquipaje0}`
            })
        };
        ConfirmarEquipaje23();
    }
    agregarEquipaje23()

    //--->Equipaje 12kg<---//
    const agregarEquipaje12 = () => {
        const inputEquipaje12 = document.getElementById("inputEquipaje12");

        const Equipajecantidad12 = () => {
            inputEquipaje12.addEventListener("change", () => {
                cantidadEquipaje12 = inputEquipaje12.valueAsNumber
            })
        }
        Equipajecantidad12();

        const ConfirmarEquipaje12 = () => {
            const btnConfirmEquipaje12 = document.getElementById("confirmar12");
            const busquedaEquipaje = equipajes.find(equipaje => equipaje.id === btnConfirmEquipaje12.value);
            ;
            btnConfirmEquipaje12.addEventListener("click", () => {
                precioEquipaje12 = busquedaEquipaje.precio * cantidadEquipaje12;
                cantidadEquipaje23 > cantidadCarrito ? Swal.fire({
                    icon: "warning",
                    title: "LLeva mucho equipaje :(",
                    text: "Solo esta permitido 1 equipaje de 23kg por pasajero",
                    duration: 3000,
                }) : Swal.fire({
                    icon: "success",
                    title: "Agrando su equipaje!!",
                    text: `Agrego con exito su equipaje de 12kg\n cantidad agregada: ${cantidadEquipaje23}`,
                })
                equipajeCarrito.innerText = `${precioEquipaje23 + precioEquipaje12 + precioEquipaje10 + precioEquipaje0}`
            })

        };
        ConfirmarEquipaje12();
    }
    agregarEquipaje12();

    //--->Equipaje 10kg<---//
    const agregarEquipaje10 = () => {
        const inputEquipaje10 = document.getElementById("inputEquipaje10");

        const Equipajecantidad10 = () => {
            inputEquipaje10.addEventListener("change", () => {
                cantidadEquipaje10 = inputEquipaje10.valueAsNumber
            })
        }
        Equipajecantidad10();

        const ConfirmarEquipaje10 = () => {
            const btnConfirmEquipaje10 = document.getElementById("confirmar10");
            const busquedaEquipaje = equipajes.find(equipaje => equipaje.id === btnConfirmEquipaje10.value);
            ;
            btnConfirmEquipaje10.addEventListener("click", () => {
                precioEquipaje10 = busquedaEquipaje.precio * cantidadEquipaje10;
                cantidadEquipaje23 > cantidadCarrito ? Swal.fire({
                    icon: "warning",
                    title: "LLeva mucho equipaje :(",
                    text: "Solo esta permitido 1 equipaje de 23kg por pasajero",
                    duration: 3000,
                }) : Swal.fire({
                    icon: "success",
                    title: "Agrando su equipaje!!",
                    text: `Agrego con exito su equipaje de 12kg\n cantidad agregada: ${cantidadEquipaje23}`,
                })
                equipajeCarrito.innerText = `${precioEquipaje23 + precioEquipaje12 + precioEquipaje10 + precioEquipaje0}`
            })

        };
        ConfirmarEquipaje10();
    }
    agregarEquipaje10();

    //--->Equipaje 0kg<---//
    const agregarEquipaje0 = () => {
        const inputEquipaje0 = document.getElementById("inputEquipaje0");

        const Equipajecantidad0 = () => {
            inputEquipaje0.addEventListener("change", () => {
                cantidadEquipaje0 = inputEquipaje0.valueAsNumber
            })
        }
        Equipajecantidad0();

        const ConfirmarEquipaje0 = () => {
            const btnConfirmEquipaje0 = document.getElementById("confirmar0");
            const busquedaEquipaje = equipajes.find(equipaje => equipaje.id === btnConfirmEquipaje0.value);
            ;
            btnConfirmEquipaje0.addEventListener("click", () => {
                precioEquipaje0 = busquedaEquipaje.precio * cantidadEquipaje0;
                cantidadEquipaje23 > cantidadCarrito ? Swal.fire({
                    icon: "warning",
                    title: "LLeva mucho equipaje :(",
                    text: "Solo esta permitido 1 equipaje de 23kg por pasajero",
                    duration: 3000,
                }) : Swal.fire({
                    icon: "success",
                    title: "Agrando su equipaje!!",
                    text: `Agrego con exito su equipaje de 12kg\n cantidad agregada: ${cantidadEquipaje23}`,
                })
                equipajeCarrito.innerText = `${precioEquipaje23 + precioEquipaje12 + precioEquipaje10 + precioEquipaje0}`
            })

        };
        ConfirmarEquipaje0();
    }
    agregarEquipaje0();
}

agregarEquipaje();
let cardsMascotas = document.createElement("div");

const agregarMascota = () => {
    //--->Evento cuando chequea que viaja con mascota<---//
    const checkboxMascota = document.getElementById("viajaConMascota");
    const form = document.getElementById("formComprar");

    checkboxMascota.addEventListener("change", () => {
        if (checkboxMascota.checked) {
            cardsMascotas.classList.add("cardsMascotas", "d-flex", "flex-row");
            cardsMascotas.innerHTML = `
                    <div class="container d-flex flex-row card m-1" style="width: 50rem;">
                    <div class="card-body cardMascotas container">
                        <h5 id="tituloMascota" class="fs-6 fw-bold text-decoration-underline">En cabina</h5>
                        <small class="opacity-75 text-center">Disponible para mascotas que pesen:</small>
                        <small class="opacity-50">- 18kg <br><br> $5000</small>
                        <input id="inputMascotasMenor18" type="checkbox" placeholder="0" value="1">
                        </input>
                    </div>
            </div>
            <div class="container card m-1" style="width: 50rem;">
                <div class="card-body cardMascotas container">
                    <h5 class="fs-6 fw-bold text-decoration-underline">En bodega</h5>
                    <small class="opacity-75 text-center">Disponible para mascotas que pesen:</small>
                    <small class="opacity-50">+ 18kg <br><br> $4000</small>
                    <input id="inputMascotasMayor18" type="checkbox" placeholder="0" value="2">
                    </input>
                </div>
            </div>
                    `
            form.appendChild(cardsMascotas);

        } else {
            cardsMascotas.innerHTML = ` `
            carritoMascota.innerText = `0`
            form.appendChild(cardsMascotas)
        };
        const cabinaBodega = () => {
            const mascotaCabina = document.getElementById("inputMascotasMenor18");
            const mascotaBodega = document.getElementById("inputMascotasMayor18");
            const buscarMascotaCabina = mascotas.find(mascota => mascota.id === mascotaCabina.value)
            const buscarMascotaBodega = mascotas.find(mascota => mascota.id === mascotaBodega.value)
            let precioMascotaCabina = 0;
            let precioMascotaBodega = 0;
            //--->Funcion para sumar ambas macotas en el carrito<---//
            const sumarMascotas = (cabina, bodega) => {
                let sumarMascotas = cabina + bodega
                carritoMascota.innerText = `${cabina + bodega}`;
                return sumarMascotas;
            }

            //--->Evento para mascota en cabina<---//
            mascotaCabina.addEventListener("change", () => {
                if (mascotaCabina.checked) {
                    precioMascotaCabina = buscarMascotaCabina.precio
                    carritoMascota.innerText = `${precioMascotaCabina}`
                    sumarMascotas(precioMascotaBodega, precioMascotaCabina)
                } else {
                    if (!mascotaBodega.checked) {
                        precioMascotaCabina = 0;
                        sumarMascotas(precioMascotaBodega, precioMascotaCabina)
                    }

                }
                return precioMascotaCabina;
            });

            //--->Evento para mascota en bodega<---//
            mascotaBodega.addEventListener("change", () => {
                if (mascotaBodega.checked) {
                    precioMascotaBodega = buscarMascotaBodega.precio

                    sumarMascotas(precioMascotaBodega, precioMascotaCabina)
                } else {
                    if (!mascotaBodega.checked) {
                        precioMascotaBodega = 0;
                        sumarMascotas(precioMascotaBodega, precioMascotaCabina)
                    }
                }
                return precioMascotaBodega;
            });
        }
        cabinaBodega()

    });
}

agregarMascota();

let carritoCompra = []

//--->Evento cuando se recarga la pagina<---//
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    //--->Funcion para guardar array de carrito<---//
    const guardarCarrito = () => {
        const destinoNuevo = document.getElementById("seleccionarDestino").value;
        const idaFecha = document.getElementById("fechaIda");
        const vueltaFecha = document.getElementById("carritoFechaVuelta");
        const precio = document.getElementById("pasajeCarrito");
        const equipaje = document.getElementById("precioEquipajeCarrito");
        const taza = document.getElementById("carritoTaza");
        const ivaObjeto = document.getElementById("carritoIva");
        const subtotalObjeto = document.getElementById("subtotalCarrito");
        const totalObjeto = document.getElementById("totalCarrito");

        //--->array objeto de carrito<---//
        carritoCompra = [
            {
                destino: destinoNuevo,
                pasajeros: cantidad,
                fechaIda: idaFecha.value,
                fechaVuelta: vueltaFecha.textContent,
                precio: Number(precio.textContent),
                equipaje: Number(equipaje.textContent),
                mascota: Number(carritoMascota.textContent),
                tazaAeropuerto: Number(taza.textContent),
                iva: Number(ivaObjeto.textContent),
                subtotal: Number(subtotalObjeto.textContent),
                total: Number(totalObjeto.textContent)
            }
        ]

        //--->btn confirmar formulario<---//
        const btnConfirmarCompra = () => {

            Swal.fire({
                icon: "info",
                title: "Confirme su reserva",
                color: "#f8937e",
                showCancelButton: true,
                showConfirmButton: true,
                cancelButtonColor: '#d33',
                confirmButtonColor: "green",
                html: `<div>
                <ul class="d-flex flex-column justify-content-center">
                    <li><strong>Destino</strong>: ${destinoNuevo}</li>
                    <li><strong> Pasajeros</strong>: ${cantidad}</li>
                    <li><strong>Fecha Ida</strong>: ${idaFecha.value}</li>
                    <li><strong>Fecha Vuelta</strong>: ${vueltaFecha.textContent}</li>
                    <li><strong>Precio por persona</strong>: $${Number(precio.textContent)}</li>
                    <li><strong>Equipaje total</strong>: $${Number(equipaje.textContent)}</li>
                    <li><strong>Mascota</strong>: $${Number(carritoMascota.textContent)}</li>
                    <li><strong>TazaAeropuerto</strong>: $${Number(taza.textContent)}</li>
                    <li><strong>Iva</strong>: $${Number(ivaObjeto.textContent)}</li>
                    <li><strong>Subtotal</strong>: $${Number(subtotalObjeto.textContent)}</li>
                    <li><strong>Total</strong>: $${Number(totalObjeto.textContent)}</li>
                </ul>
            </div>`,
                buttons: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'success',
                        title: "Reserva Confirmada",
                    })
                    formulario.reset();
                    getStorageDestino.innerText = `xxxxxx`;
                    getStoragePasajero.innerText = `0`;
                    getStorageFechaIda.innerText = `xx/xx/xxxx`;
                    getStorageFechaVuelta.innerText = `xx/xx/xxxx`;
                    getStoragePrecioPasaje.innerText = `0`;
                    getStorageEquipaje.innerText = `0`;
                    getStorageMascota.innerText = `0`;
                    getStorageTaza.innerText = `0`
                    getStorageIva.innerText = `0`
                    getStorageSubtotal.innerText = `0`
                    getStorageTotal.innerText = `0`
                    carritoCompra.splice(0, 10);
                    //--->Borra local storage<---//
                    localStorage.removeItem("carrito");
                } else if (result.isDenied) {
                    Swal.fire('Ha cancelado la reserva', '', 'info')
                }
                carritoVacio();
            });
            guardarCarritoStorage(carritoCompra);
            console.log(carritoCompra);

        }
        btnConfirmarCompra()
        carritoVacio();

    }

    guardarCarrito()
})

//--->Funcion para vaciar carrito y array si se aprieta btn VACIAR CARRITO<---//
const carritoVacio = () => {
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
        carritoIva.innerText = `0`
        carritoTaza.innerHTML = `0`;
        carritoMascota.inntertext = `0`;
        pasajeCarrito.innerText = `0`;
        subtotalCarrito.innerText = `0`;
        totalCarrito.innerText = `0`;
        carritoFechaIda.innerText = `xx/xx/xxxx`;
        carritoFechaVuelta.innerText = `xx/xx/xxxx`;
        equipajeCarrito.innerText = `0`;
        Swal.fire({
            icon: "success",
            title: "Carrito vacio correctamente!",
            text: "Su carrito se encuentra sin productos",
        });
        borrarStorage("carrito");
        formulario.reset()
        cantidadPasajeros.innerText = 0;
        cardsMascotas.innerHTML = ``
        carritoMascota.innerText = `0`
    });
}



