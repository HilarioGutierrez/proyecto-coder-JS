const destinos = [
    {
        nombre: "Mendoza",
        precioIda: 6999,
        precioVuelta: 5649,
        total: 6999 + 5649
    },

    {
        nombre: "Puerto Iguazú",
        precioIda: 6455,
        precioVuelta: 5000,
        total: 6455 + 5000,
    },

    {
        nombre: "Córdoba",
        precioIda: 13187,
        precioVuelta: 24861,
        total: 13187 + 24861
    },

    {
        nombre: "Bariloche",
        precioIda: 12300,
        precioVuelta: 10500,
        total: 12300 + 10500

    },

    {
        nombre: "Puerto Madryn",
        precioIda: 15675,
        precioVuelta: 9942,
        total: 15675 + 9942
    },

    {
        nombre: "Jujuy",
        precioIda: 9931,
        precioVuelta: 11478,
        total: 9931 + 11478
    },

    {
        nombre: "Ushuaia",
        precioIda: 13699,
        precioVuelta: 10930,
        total: 13699 + 10930
    },

    {
        nombre: "Salta",
        precioIda: 16448,
        precioVuelta: 7309,
        total: 16448 + 7309
    }
];

const destinosAumento = destinos.map(destino => {
    return {
        nombre: destino.nombre, precioIda: Math.ceil(destino.precioIda * 1.20), precioVuelta: Math.ceil(destino.precioVuelta * 1.20), total: Math.floor((destino.precioIda * 1.20) + (destino.precioVuelta * 1.20))
    }
})

const equipajes = [
    {
        id: '1',
        peso: 23,
        precio: 3399
    },
    {
        id: '2',
        peso: 12,
        precio: 2599
    },
    {
        id: '3',
        peso: 10,
        precio: 2399
    },
    {
        id: '4',
        peso: 0,
        precio: 0
    }
]

const mascotas = [
    {
        id: '1',
        peso: -18,
        lugar: "cabina",
        precio: 5000,
    },
    {
        id: '2',
        peso: +18,
        lugar: "bodega",
        precio: 5000,
    },
    {
        id: '3',
        peso: 0,
        lugar: "",
        precio: 0,
    }
]