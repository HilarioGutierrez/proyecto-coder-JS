
//Pintar destino en resumen de compra//
const pintarCarrito = () => {
    const lugar = document.getElementById("seleccionarDestino");
    lugar.addEventListener("change", () => {
        const carrito = document.getElementById("destinoCarrito");
        const select = document.querySelector("#seleccionarDestino").value;
        const destinoFinal = destinos.find(destino => destino.nombre === select)
        carrito.innerText = `${destinoFinal.nombre}`;

    })
    const elegirIdaYVuelta = document.getElementById("IdaYVuelta");
    elegirIdaYVuelta.addEventListener("click", () => {
        if(elegirIdaYVuelta.checked){
            alert("Ha elegido viajar ida y vuelta")
        //pintar input para ingresar nueva fecha de vuelta y usar valor total para pintar precio en carrito//
        
        }
    });
}

//Pintar fecha en carrito//
const pintarFechaIda = () => {
    const fechaIda = document.getElementById("fechaIda");
    fechaIda.addEventListener("change", () => {
        const carritoFechaIda = document.getElementById("carritoFechaIda");
        carritoFechaIda.innerText = `${fechaIda.value}`
    })
}
const pintarFechaVuelta = () => {
    const fechaVuelta = document.getElementById("fechaVuelta");
    fechaVuelta.addEventListener("change", () => {
        const carritoFechaVuelta = document.getElementById("carritoFechaVuelta");
        carritoFechaVuelta.innerText = `${fechaVuelta.value}`;
    }


    )
}

//Pintar nombre y apellido del pasajero//
const pintarPasajero = () => {
    const nombre1 = document.getElementById("nombrePasajero1");
    nombre1.addEventListener("change", () => {
        const carritoPasajero1 = document.getElementById("carritoPasajero1");
        apellido();
        carritoPasajero1.innerText = `${nombre1.value}  ${apellido1.value}`
    })
}

const apellido = () => {
    const apellido1 = document.getElementById("apellidoPasajero1");
    apellido1.addEventListener("change", () => {
        const carritoApellido1 = document.getElementById("carritoPasajero1");
        carritoApellido1.innerText = `${apellido1.value}`
    })
}


pintarCarrito();
pintarFechaIda();
pintarFechaVuelta();




