const destinos = [
    {nombre: "MENDOZA",precioIda: 6999,precioVuelta: 5649, total: 6999+5649},
    {nombre: "IGUAZU",precioIda: 6455,precioVuelta: 5000, total: 6455+5000},
    {nombre: "BARILOCHE",precioIda: 12300,precioVuelta: 10500, total: 12300+10500},
    {nombre: "CORDOBA",precioIda: 13187,precioVuelta: 24861, total: 13187+24861},
];

const destinosAumento = destinos.map(destino => {
    return{
        nombre:destino.nombre, precioIda: Math.ceil(destino.precioIda*1.20), precioVuelta: Math.ceil(destino.precioVuelta*1.20), total:Math.floor((destino.precioIda*1.20) +(destino.precioVuelta*1.20))
    }
})
console.log(destinosAumento);

const equipajes = [
    {id:1, peso:23, precio:3399},
    {id:2, peso:12, precio:2599},
    {id:3, peso:10, precio:2399}
]

