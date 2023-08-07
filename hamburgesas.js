function saludar() {
    let saludo = "";

    while (saludo.toLowerCase() !== "hola") {
        saludo = prompt("Por favor, ingresa el saludo 'hola':").toLowerCase();
    }

    alert("¡Hola! ¡Has ingresado el saludo correcto!");
}

saludar();

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

function pedirHamburguesaVegana() {
    let opcion2 = 0;

    while (opcion2 !== 1 && opcion2 !== 2) {
        opcion2 = parseInt(prompt("Eligió la opción hamburguesa vegana. Las opciones son:\n1-Hamburguesa de zanahoria\n2-Hamburguesa de arvejas"));
    }

    if (opcion2 === 1) {
        alert("Eligió la hamburguesa de zanahoria, viene con 1 disco acompañado con lechuga y tomate.");
    } else if (opcion2 === 2) {
        alert("Eligió la hamburguesa de arvejas, viene con 1 disco acompañado con lechuga y tomate.");
    }
}

function pedirHamburguesaCarne() {
    let opcion1 = prompt("Eligió hamburguesas de carne. ¿Le gustaría agregarle cheddar? (si/no)").toLowerCase();

    if (opcion1 === "si") {
        alert("Eligió sí, su hamburguesa sería una Triple cheddar con bacon, lechuga y tomate.");
    } else if (opcion1 === "no") {
        alert("Eligió no, su hamburguesa sería una Triple con bacon, lechuga y tomate.");
    }
}

let nombreCliente = prompt("Cliente, escriba su nombre");
alert("Bienvenido/a " + nombreCliente);

pedirHamburguesa();
