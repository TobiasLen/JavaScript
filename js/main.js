/* // JSON
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

// funciones superiores

class Hamburguesa {
    constructor (nombre, ingredientes, precioBase) {
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precioBase = precioBase;
    }

    calcularPrecio() {
        let precioTotal = this.precioBase + (this.ingredientes.length * 360); // Precio base + costo por ingrediente
        return precioTotal;
    }
    mostrarDetalles() {
        console.log("Hamburguesa: " + this.nombre);
        console.log("Ingredientes: " + this.ingredientes.join(", "));
        console.log("Precio: $" + this.calcularPrecio());
    }
    
}

let hamburguesa1 = new Hamburguesa("Clásica", ["Carne", "Lechuga", "Tomate", "Queso"], 3800);
let hamburguesa2 = new Hamburguesa("Vegetariana", ["Hamburguesa de garbanzos", "Lechuga", "Tomate", "Queso vegano"], 3900);

function tomarPedido(hamburguesa) {
    console.log("Pedido tomado:");
    hamburguesa.mostrarDetalles();
    cobrar(hamburguesa.calcularPrecio());
}

function cobrar(total) {
    console.log("Total a pagar: $" + total.toFixed(2));
}

tomarPedido(hamburguesa1);
tomarPedido(hamburguesa2);

// login

function iniciarSesion() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Verificar las credenciales (esto es solo un ejemplo simplificado)
    if (username === "usuario" && password === "contraseña") {
        alert("Inicio de sesión exitoso.");
        document.getElementById("loginSection").style.display = "none"; // Ocultar la sección de inicio de sesión
    } else {
        alert("Credenciales incorrectas. Intente de nuevo.");
    }
}

// Funciones + alerts (cambiar alerts y prompt)

// Función para saludar
function saludar() {
    console.log("Hola a todos!!");
    let saludo = "";
    
    while (saludo.toLowerCase() !== "hola") {
        saludo = prompt("Por favor, ingresa el saludo 'hola':").toLowerCase();
    }
    
    console.log(saludo);
}

// Función para pedir hamburguesa
function pedirHamburguesa() {
    let opcion = 0;
    
    while (opcion !== 1 && opcion !== 2) {
        opcion = parseInt(prompt("Elija una opción:\n1-Hamburguesa Vegana\n2-Hamburguesa Carne"));
    }
    
    if (opcion === 1) {
        pedirHamburguesaVegana();
    } else if (opcion === 2) {
        pedirHamburguesaCarne();
    }
}

// Función para pedir hamburguesa vegana
function pedirHamburguesaVegana() {
    let opcion2 = 0;
    
    while (opcion2 !== 1 && opcion2 !== 2) {
        opcion2 = parseInt(prompt("Eligió la opción hamburguesa vegana. Las opciones son:\n1-Hamburguesa de zanahoria\n2-Hamburguesa de arvejas"));
    }
    
    if (opcion2 === 1) {
        console.log("Eligió la hamburguesa de zanahoria, viene con 1 disco acompañado con lechuga y tomate.");
    } else if (opcion2 === 2) {
        console.log("Eligió la hamburguesa de arvejas, viene con 1 disco acompañado con lechuga y tomate.");
    }
}

// Función para pedir hamburguesa de carne
function pedirHamburguesaCarne() {
    let opcion1 = prompt("Eligió hamburguesas de carne. ¿Le gustaría agregarle cheddar? (si/no)").toLowerCase();
    
    if (opcion1 === "si") {
        console.log("Eligió sí, su hamburguesa sería una Triple cheddar con bacon, lechuga y tomate.");
    } else if (opcion1 === "no") {
        console.log("Eligió no, su hamburguesa sería una Triple con bacon, lechuga y tomate.");
    }
}


// Función principal
function main() {
    let nombreCliente = prompt("Cliente, escriba su nombre");
    console.log("Bienvenido/a " + nombreCliente);
    
    pedirHamburguesa();
    
    const cantidadIgredientes = 3;
    const ingredientes = [];
    
    for (let i = 0; i < cantidadIgredientes; i++) {
        let n = i + 1;
        ingredientes.push(prompt("Agregar ingredientes " + n));
    }
    
    console.log(ingredientes);
}

// Llamada a la función principal
main();

// localStoreage

// Guardar un valor en localStorage
localStorage.setItem("nombre", "John");

// Obtener un valor de localStorage
var nombre = localStorage.getItem("nombre");
console.log("Nombre: " + nombre); // Imprimirá "Nombre: John" en la consola

// Eliminar un valor de localStorage
localStorage.removeItem("nombre");

// Intentar obtener el valor después de eliminarlo
nombre = localStorage.getItem("nombre");
if (nombre === null) {
console.log("El valor 'nombre' ha sido eliminado de localStorage.");
} else {
console.log("Nombre: " + nombre);
} */