
//--->Funcion para calcular la taza aeroportuaria (%) del subtotal de la cómpra. Producto del 5% del subtotal<---//
function agregarTaza(Aeropuerto) {
    let tazaAeropuerto = Aeropuerto * 0.05
    return tazaAeropuerto
}

//--->Funcion para calcular el IVA. Producto *1.21<---//
function sumarIva(monto) {
    let iva = monto * 0.21

    return iva
}

//--->Funcion para obtener el subtotal del pasaje<---//
function valorSubtotal(pasajes, equipaje, mascota, taza, iva) {
    let subtotal;
    subtotal = Number(pasajes + equipaje + mascota + taza + iva)
    return subtotal
}