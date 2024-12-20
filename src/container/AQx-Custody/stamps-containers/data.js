// data.js

export const optionsInventory = [
    {
        categoria: "bines",
        items: [
            {
                codigo: "BIN001",
                nombre: "Bine Grande",
                sellosSeguridad: "Sí",
                tagsObservaciones: "Revisar cada mes",
                hieloSacos: 100,
                metabisulfito: "200 mg",
            },
            {
                codigo: "BIN002",
                nombre: "Bine Mediano",
                sellosSeguridad: "Sí",
                tagsObservaciones: "Sin observaciones",
                hieloSacos: 75,
                metabisulfito: "150 mg",
            },
            {
                codigo: "BIN003",
                nombre: "Bine Pequeño",
                sellosSeguridad: "No",
                tagsObservaciones: "Necesita mantenimiento",
                hieloSacos: 50,
                metabisulfito: "100 mg",
            },
            // Agrega más ítems de bines según sea necesario
        ]
    },
    {
        categoria: "gavetas",
        items: [
            {
                codigo: "GAV001",
                nombre: "Gaveta de Almacenamiento A",
                sellosSeguridad: "Sí",
                tagsObservaciones: "Revisar sellos semanalmente",
                hieloSacos: 30,
                metabisulfito: "50 mg",
            },
            {
                codigo: "GAV002",
                nombre: "Gaveta de Almacenamiento B",
                sellosSeguridad: "No",
                tagsObservaciones: "Sin observaciones",
                hieloSacos: 25,
                metabisulfito: "40 mg",
            },
            {
                codigo: "GAV003",
                nombre: "Gaveta de Almacenamiento C",
                sellosSeguridad: "Sí",
                tagsObservaciones: "Revisar integridad cada dos semanas",
                hieloSacos: 35,
                metabisulfito: "60 mg",
            },
            // Agrega más ítems de gavetas según sea necesario
        ]
    }
];

// Crear una lista plana de ítems para sampleData
export const sampleData = optionsInventory.flatMap(category => 
    category.items.map(item => ({
        key: item.codigo, // Asegúrate de que 'codigo' sea único
        categoria: category.categoria,
        codigo: item.codigo,
        nombre: item.nombre,
        sellosSeguridad: item.sellosSeguridad,
        tagsObservaciones: item.tagsObservaciones,
        hieloSacos: item.hieloSacos,
        metabisulfito: item.metabisulfito,
    }))
);
