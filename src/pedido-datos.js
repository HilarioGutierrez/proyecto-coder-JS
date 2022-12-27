//--->Pedido de datos por Fetch<---

//--->funcion para obtener x fetch los destinos en formato JSON<---//
const pedidoDestinos = async () => {
    //--->Try/Catch para validar por si llega haber un error en la carga de la api/json<---//
    try {
        const resp = await fetch("src/destinos.json");
        const data = resp.json();
        return data
    } catch (err) {
        alert("surgui el siguiente error: " + err);
    }
};

