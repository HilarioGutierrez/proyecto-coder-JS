//--->Evento cuando recarga la pagina<---//
const getStorageDestino = document.getElementById("destinoCarrito");
const getStoragePasajero = document.getElementById("pasajerosCarrito");
const getStorageFechaIda = document.getElementById("carritoFechaIda");
const getStorageFechaVuelta = document.getElementById("carritoFechaVuelta");
const getStoragePrecioPasaje = document.getElementById("pasajeCarrito");
const getStorageEquipaje = document.getElementById("precioEquipajeCarrito");
const getStorageMascota = document.getElementById("carritoMascota");
const getStorageTaza = document.getElementById("carritoTaza");
const getStorageIva = document.getElementById("carritoIva");
const getStorageSubtotal = document.getElementById("subtotalCarrito");
const getStorageTotal = document.getElementById("totalCarrito");

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem("carrito")) {
        const getStorage = obtenerCarritoStorage();
        console.log(obtenerCarritoStorage());
        Swal.fire({
            icon: "warning",
            title: "Tiene elementos en el carrito",
            text: " Finalice su comprar"
        })

        getStorage.forEach(element => {

            Swal.fire({
                icon: "warning",
                title: "Finalice su compra",
                color: "#f8937e",
                showCancelButton: true,
                showConfirmButton: true,
                cancelButtonColor: '#d33',
                confirmButtonColor: "green",
                html: `<div>
                <ul class="d-flex flex-column justify-content-center">
                    <li><strong>Destino</strong>: ${element.destino};</li>
                    <li><strong> Pasajeros</strong>: ${element.pasajeros}</li>
                    <li><strong>Fecha Ida</strong>: ${element.fechaIda}</li>
                    <li><strong>Fecha Vuelta</strong>: ${element.fechaVuelta}</li>
                    <li><strong>Precio por persona</strong>: $${element.precio}</li>
                    <li><strong>Equipaje total</strong>: $${element.equipaje}</li>
                    <li><strong>Mascota</strong>: $${element.mascota}</li>
                    <li><strong>TazaAeropuerto</strong>: $${element.tazaAeropuerto}</li>
                    <li><strong>Iva</strong>: $${element.iva}</li>
                    <li><strong>Subtotal</strong>: $${element.subtotal}</li>
                    <li><strong>Total</strong>: $${element.total}</li>
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
        });

        // //--->Agrega btn confirmar cuando se recupera storage<---//
        // const carrito = document.getElementById('carritoBtn');
        // const btnConfirmarCompra = document.createElement('div');
        // btnConfirmarCompra.innerHTML = `
        // <button id="btnCompra" type="submit" class="btn m-2 btnConfirmar">Comprar</button>
        // `
        // carrito.appendChild(btnConfirmarCompra);

        // //Evento para confirmar compra con get storage<---//
        // const botonConfirmar = document.getElementById("btnCompra");
        // botonConfirmar.addEventListener("click", () => {
        //     const getStorage = obtenerCarritoStorage();
        //     //if (getStorage.length === 1) {
        //     //--->Si el carrito esta vacio no puede comprar<---//
        //     Swal.fire({
        //         icon: "warning",
        //         title: "El carrito se encuentra vacio",
        //         text: "Para realizar una compra debe tener elementos en el carrito",
        //     })

        //     // } else if(getStorage.length === typeof null) {
        //     Swal.fire({
        //         icon: "success",
        //         title: "Ha realizado la compra con exito"
        //     })
        //     formulario.reset();
        //     getStorageDestino.innerText = `xxxxxx`;
        //     getStoragePasajero.innerText = `0`;
        //     getStorageFechaIda.innerText = `xx/xx/xxxx`;
        //     getStorageFechaVuelta.innerText = `xx/xx/xxxx`;
        //     getStoragePrecioPasaje.innerText = `0`;
        //     getStorageEquipaje.innerText = `0`;
        //     getStorageMascota.innerText = `0`;
        //     getStorageTaza.innerText = `0`
        //     getStorageIva.innerText = `0`
        //     getStorageSubtotal.innerText = `0`
        //     getStorageTotal.innerText = `0`
        //     carritoCompra.splice(0, 10);
        //     //--->Borra local storage<---//
        //     localStorage.removeItem("carrito");
        //     //  }
        //     console.log(obtenerCarritoStorage())
        // })
        carritoVacio();
    };
});
