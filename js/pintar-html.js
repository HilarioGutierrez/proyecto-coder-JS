
//agregar pasajero //

const agregarPasajero = () => {
    const pasajero2 = document.getElementById("pasajero2");
    const div = document.getElementById("divPasajero2");
    const pasajeroExtra = document.createElement("div")
    let numeroPasajero = 2
    pasajero2.addEventListener("click", () => {
        pasajeroExtra.innerHTML += `
        <div id="PasajeroExtra" class="d-flex flex-column">
        <div class="d.flex flex-row align-items-baseline"> 
                <label for="namePax">Pasajero ${numeroPasajero++}</label>
                <i id="btnEliminarPasajero" class="bi bi-x-circle"></i>
        </div>    
        <input type="text" required id="nombrePasajero2" placeholder=" Fernando" class="rounded-2 m-1">
            <input type="text" required id="apellidoPasajeo2" placeholder=" Rodriguez" class="rounded-2 m-1">
            <label for="id">Seleccione su ID</label>
            <select name="id" id="id" required class="seleccionId m-1">
                <option value="opcionesId">Seleccione una opción</option>
                <option value="dni">DNI</option>
                <option value="pasaport">Pasaporte</option>
            </select>
            <label for="numeroId">Ingrese su numero de ID</label>
            <input required type="text" class="rounded-2 m-1">
            </div>
        `
        div.appendChild(pasajeroExtra)

    })
}

// const eliminarPasajero = () =>{

// const btnEliminarPasajero = document.getElementById("btnEliminarPasajero");  
// btnEliminarPasajero.onclick (() =>{
//     const pasajeroExtra = document.getElementById("pasajeroExtra"); 
// const divP = document.getElementById("divPasajero2");
//     const eliminado = pasajeroExtra.removeChild(divP);
// }) 
// }


agregarPasajero();
// eliminarPasajero();
