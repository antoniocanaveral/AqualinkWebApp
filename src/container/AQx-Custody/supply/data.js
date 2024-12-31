// src/container/AQx-Custody/stamps-containers/data.js

export const optionsInventory = [
    {
        categoria: "Bines",
        items: [
            {
                codigo: "BIN001",
                nombre: "Bines Modelo A",
                id: "ID-001",
                unidad: "Unidad",
                peso: 150,
                disponibles: 10,
                capacidad: "500 litros",
            },
            // Agrega más ítems de Bines según sea necesario
        ]
    },
    {
        categoria: "Gavetas S", // Gavetas S (solidas)
        items: [
            {
                codigo: "GAVS001",
                nombre: "Gaveta S Modelo A",
                id: "ID-002",
                unidad: "Unidad",
                peso: 75,
                disponibles: 20,
                capacidad: "200 litros",
            },
            // Agrega más ítems de Gavetas S según sea necesario
        ]
    },
    {
        categoria: "Gavetas K", // Gavetas K (caladas)
        items: [
            {
                codigo: "GAVK001",
                nombre: "Gaveta K Modelo A",
                id: "ID-003",
                unidad: "Unidad",
                peso: 80,
                disponibles: 15,
                capacidad: "250 litros",
            },
            // Agrega más ítems de Gavetas K según sea necesario
        ]
    },
    {
        categoria: "Metabisulfito",
        items: [
            {
                codigo: "META001",
                nombre: "Meta BS Modelo A",
                id: "ID-004",
                unidad: "Unidad",
                peso: 50,
                disponibles: 30,
                capacidad: "100 litros",
            },
            // Agrega más ítems de metaBS según sea necesario
        ]
    },
    {
        categoria: "Hielo",
        items: [
            {
                codigo: "HIELO001",
                nombre: "Hielo Modelo A",
                id: "ID-005",
                unidad: "Unidad",
                peso: 20,
                disponibles: 100,
                capacidad: "50 kg",
            },
            // Agrega más ítems de Hielo según sea necesario
        ]
    },
    {
        categoria: "Sellos",
        items: [
            {
                codigo: "HIELO001",
                nombre: "Hielo Modelo A",
                id: "ID-005",
                unidad: "Unidad",
                peso: 20,
                disponibles: 100,
                capacidad: "50 kg",
            },
            // Agrega más ítems de Hielo según sea necesario
        ]
    }
];

// Crear una lista plana de ítems para sampleData con los nuevos campos
export const sampleData = optionsInventory.flatMap(category => 
    category.items.map(item => ({
        key: item.codigo, // Asegúrate de que 'codigo' sea único
        categoria: category.categoria,
        codigo: item.codigo,
        nombre: item.nombre,
        id: item.id,
        unidad: item.unidad,
        peso: item.peso,
        disponibles: item.disponibles,
        capacidad: item.capacidad,
    }))
);
