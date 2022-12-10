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

        Swal.fire({
            icon: "warning",
            title: "Tiene elementos en el carrito",
            text: " Finalice su comprar"
        })

        getStorage.forEach(element => {
            getStorageDestino.innerText = `${element.destino}`;
            getStoragePasajero.innerText = `${element.pasajeros}`;
            getStorageFechaIda.innerText = `${element.fechaIda}`;
            getStorageFechaVuelta.innerText = `${element.fechaVuelta}`;
            getStoragePrecioPasaje.innerText = `${element.precio}`;
            getStorageEquipaje.innerText = `${element.equipaje}`;
            getStorageMascota.innerText = `${element.mascota}`;
            getStorageTaza.innerText = `${element.tazaAeropuerto}`
            getStorageIva.innerText = `${element.iva}`
            getStorageSubtotal.innerText = `${element.subtotal}`
            getStorageTotal.innerText = `${element.total}`
        });

        //--->Agrega btn confirmar cuando se recupera storage<---//
        const carrito = document.getElementById('carritoBtn');
        const btnConfirmarCompra = document.createElement('div');
        btnConfirmarCompra.innerHTML = `
        <button id="btnConfirmarCompra" type="submit" class="btn m-2 btnConfirmar">Comprar</button>
        `
        carrito.appendChild(btnConfirmarCompra);

        //Evento para confirmar compra con get storage<---//
        const botonConfirmar = document.getElementById("btnConfirmarCompra");
        botonConfirmar.addEventListener("click", () => {
            Swal.fire({
                icon: "success",
                title: "Ha realizado la compra con exito"
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
            carritoCompra.splice(0,10);
            //--->Borra local storage<---//
            localStorage.removeItem("carrito");
        })
        carritoVacio();
    };
});
