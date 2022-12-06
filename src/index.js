//--->Evento cuando recarga la pagina<---//
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem("carrito")) {
        const getStorage = obtenerCarritoStorage();

        swal({
            icon: "warning",
            title: "Tiene elementos en el carrito",
            text: " Finalice su comprar"
        })

        getStorage.forEach(element => {
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
        <button id="btnConfirmarCompra" type="submit" class="btn m-2 btnConfirmar">Confirmar</button>
        `
        carrito.appendChild(btnConfirmarCompra);

        //Evento para confirmar compra con get storage<---//
        const botonConfirmar = document.getElementById("btnConfirmarCompra");
        botonConfirmar.addEventListener("click", () => {
            alert('Confirmar');
        })
        carritoVacio();
    };
});
