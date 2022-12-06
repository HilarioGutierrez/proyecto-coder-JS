//--->funciones de storage<---//
const guardarCarritoStorage = (carritoDeCompras) => {
    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
};
//--->Obtener Storage<---//
const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
    return carritoStorage;
}

//--->Funcion para limpar storage<---//
const borrarStorage = (clave) => {
    localStorage.removeItem(clave)
}