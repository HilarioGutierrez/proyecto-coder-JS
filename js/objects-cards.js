
/// Crear tarjetas de destinos
const pintarDestinos = () => {
    const card = document.getElementById("sectionCards")
    destinos.forEach(destino => {
        const div = document.createElement("div");
        div.classList.add("tarjetasDestino");
        div.innerHTML +=
            `<div class="card m-3" style="width: 18rem;">
            <a href="../pages/datos-pasajero.html"><img src="${destino.imagen}" class="card-img-top"
                alt="parras de uva representando a la ciudad de mendoza">
            
        </div>`

        card.appendChild(div);

    })

}
pintarDestinos();