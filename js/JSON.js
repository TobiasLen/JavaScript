const cars = `[

    {
        "modelo": "ford mustang",
        "produccion": 2010,
        "millaje": 12000
    },

    {
        "modelo": "honda accord",
        "produccion": 2021,
        "millaje": 4560
    },
    
    {
        "modelo": "volkswagen Golf",
        "produccion": 2016,
        "millaje": 58200
    }
    
    
]
`;
console.log(typeof cars);

// variable o objetos con JSON

const jsonData = JSON.parse(cars);
console.log(typeof jsonData);

const carrosnuevos = jsonData.filter(
    (carro) => carro.produccion > 2010 && carro.millaje <30000
);
console.log(carrosnuevos)