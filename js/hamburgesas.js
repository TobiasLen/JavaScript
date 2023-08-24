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
