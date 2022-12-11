const sectionCards = document.getElementById("sectionCards");

//--->Funcion para pintar los datos obtenidos en JSON<---//
const pintarPedidoDestinos = async () => {
    const data = await pedidoDestinos();
    data.forEach(destino => {
        const divDestinos = document.createElement("div");
        divDestinos.classList.add("d-flex", "justify-content-center", "justify-content-lg-around", "flex-row",);
        divDestinos.innerHTML = `
    <a href="./pages/comprar.html" class="vinculo">
    <div class="d-flex flex-column align-items-center justify-content-center justify-content-lg-around cardDestino m-3">
        <h3 class="tituloTarjetasDestino text-center m-3">${destino.nombre}</h3>
        <img class="imagenDestino" src="${destino.imagen}" alt="">
        </div>
        </a>
        `
        sectionCards.append(divDestinos);

    });
}
pintarPedidoDestinos()