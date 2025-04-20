

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

        ]
    }
];


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
