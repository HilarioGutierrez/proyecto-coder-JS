//---> CARGA DE PAGINA <---//

document.addEventListener("DOMContentLoaded", () =>{
    const traerStorage=obtenerCarritoStorage("carrito");
    const carritoDestinoStorage=document.getElementById("carritoDestino")
    carritoDestinoStorage.innerText = `${"carrito"[0]}`
})