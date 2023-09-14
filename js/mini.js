// JSON
const carsData = `[

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

// variable o objetos con JSON
const jsonData = JSON.parse(carsData);

function mostrarInfoAutos() {
    const infoAutosDiv = document.getElementById("infoAutos");
    infoAutosDiv.innerHTML = ""; // Limpiar contenido anterior

    const carrosNuevos = jsonData.filter(
        (carro) => carro.produccion > 2010 && carro.millaje < 30000
    );

    carrosNuevos.forEach((carro) => {
        const infoAuto = document.createElement("div");
        infoAuto.textContent = `Modelo: ${carro.modelo}, Producción: ${carro.produccion}, Millaje: ${carro.millaje}`;
        infoAutosDiv.appendChild(infoAuto);
    });
}

// ...

// Función para saludar
function saludar() {
    const saludoDiv = document.getElementById("saludo");
    saludoDiv.innerHTML = ""; // Limpiar contenido anterior

    const saludoInput = document.getElementById("saludoInput");
    const saludo = saludoInput.value.toLowerCase();

    if (saludo === "hola") {
        saludoDiv.textContent = "¡Hola a todos!!";
    } else {
        saludoDiv.textContent = "Por favor, ingresa el saludo 'hola'.";
    }
}

// ...

// Función para pedir hamburguesa
function pedirHamburguesa() {
    const opcionInput = document.getElementById("opcionInput");
    const opcion = parseInt(opcionInput.value);

    if (opcion === 1) {
        pedirHamburguesaVegana();
    } else if (opcion === 2) {
        pedirHamburguesaCarne();
    } else {
        alert("Por favor, elija una opción válida.");
    }
}

// Función para pedir hamburguesa vegana
function pedirHamburguesaVegana() {
    const opcionVeganaInput = document.getElementById("opcionVeganaInput");
    const opcion2 = parseInt(opcionVeganaInput.value);

    if (opcion2 === 1) {
        console.log("Eligió la hamburguesa de zanahoria, viene con 1 disco acompañado con lechuga y tomate.");
    } else if (opcion2 === 2) {
        console.log("Eligió la hamburguesa de arvejas, viene con 1 disco acompañado con lechuga y tomate.");
    } else {
        alert("Por favor, elija una opción válida.");
    }
}

// Función para pedir hamburguesa de carne
function pedirHamburguesaCarne() {
    const opcionCarneInput = document.getElementById("opcionCarneInput");
    const opcion1 = opcionCarneInput.value.toLowerCase();

    if (opcion1 === 3) {
        console.log("Eligió sí, su hamburguesa sería una Triple cheddar con bacon, lechuga y tomate.");
    } else if (opcion1 === 3) {
        console.log("Eligió no, su hamburguesa sería una Triple con bacon, lechuga y tomate.");
    } else {
        alert("Por favor, responda con 'si' o 'no'.");
    }
}

// ...

// Llamada a la función principal
/* function main() {
    const nombreClienteInput = document.getElementById("nombreInput");
    const nombreCliente = nombreClienteInput.value;
    const nombreBienvenida = document.getElementById("nombreBienvenida");
    
    if (nombreCliente) {
        nombreBienvenida.textContent = `Bienvenido/a ${nombreCliente}`;
        pedirHamburguesa();
        
        const cantidadIngredientes = 3;
        const ingredientes = [];
        
        for (let i = 0; i < cantidadIngredientes; i++) {
            let n = i + 1;
            const ingredienteInput = document.getElementById("ingredienteInput" + n);
            ingredientes.push(ingredienteInput.value);
        }
        
        console.log(ingredientes);
    } else {
        alert("Por favor, escriba su nombre.");
    }
} */


/* const quitarSubmit = document.querySelector("form.formNombre");
quitarSubmit.addEventListener("DOMContentLoaded", (e) =>{

quitarSubmit.addEventListener("submit", (e) =>{
    e.preventDefault();
    const nombreUser = e.target[0].value;
    localStorage.setItem("nombre", JSON.stringify(nombreUser));
}) 
})
 */



// Obtener referencias a los elementos HTML
const inputText = document.getElementById('inputText');
const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const displayText = document.getElementById('displayText');

// Verificar si ya hay datos en el Local Storage y mostrarlos
const savedText = localStorage.getItem('textoGuardado');
if (savedText) {
    displayText.textContent = 'Texto guardado: ' + savedText;
}

// Agregar un manejador de eventos al botón "Guardar"
boton1.addEventListener('click', function() {
    // Obtener el valor del input
    const texto = inputText.value;

    // Guardar el valor en el Local Storage
    localStorage.setItem('textoGuardado', texto);

    // Mostrar el valor en la página
    displayText.textContent = 'Texto guardado: ' + texto;
});

// Agregar un manejador de eventos al botón "Limpiar"
boton2.addEventListener('click', function() {
    // Remover el valor del Local Storage
    localStorage.removeItem('textoGuardado');

    // Limpiar el área de visualización
    displayText.textContent = 'Texto guardado: ';
});



// ...

// // Guardar un valor en localStorage
// function guardarEnLocalStorage() {
//     const nombreInput = document.getElementById("nombreLocalStorage");
//     const nombre = nombreInput.value;
    
//     if (nombre) {
//         localStorage.setItem("nombre", nombre);
//         alert("Valor guardado en localStorage.");
//     } else {
//         alert("Por favor, ingrese un valor.");
//     }
// }

// // Obtener un valor de localStorage
// function obtenerDeLocalStorage() {
//     const nombreObtenido = localStorage.getItem("nombre");
//     const valorObtenidoDiv = document.getElementById("valorObtenido");

//     if (nombreObtenido) {
//         valorObtenidoDiv.textContent = `Valor obtenido de localStorage: ${nombreObtenido}`;
//     } else {
//         valorObtenidoDiv.textContent = "El valor no existe en localStorage.";
//     }
// }

// // Eliminar un valor de localStorage
// function eliminarDeLocalStorage() {
//     localStorage.removeItem("nombre");
//     alert("Valor eliminado de localStorage.");
// }

// // ...
