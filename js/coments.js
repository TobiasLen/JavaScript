// class Vehiculo {
//     constructor(tipo, nombre, edad, peso) {
//         this.nombre = nombre;
//         this.tipo = tipo;
//         // this.edad = Number(edad);
//         // this.edad = parseInt(edad);
//         // this.peso = parseFloat(peso);
//         this.edad = +edad;
//         this.peso = +peso;
//     }

//     arrancar() {
//         console.log("BRUMM BRUMM");
//     }
// }

// const chevrolet = new Vehiculo("auto", "chevie", ["ss"], "4", "6.5");
// const ford = new Vehiculo("auto", "mustang", ["68"], 3, 2.3);

// console.log(ford.nombre);

// console.log(chevrolet.nombre)

// perro.imprimiarrancar();

// perro.imprimirNombre();



// Función para crear una hamburguesa
// function crearHamburguesa(nombre, ingredientes) {
//     return {
//     nombre: nombre,
//     ingredientes: ingredientes,
//     mostrarDetalles: function() {
//         console.log("Hamburguesa: " + this.nombre);
//         console.log("Ingredientes: " + this.ingredientes.join(", "));
//     }
//     };
// }

//   // Crear hamburguesas
// let hamburguesa1 = crearHamburguesa("Clásica", ["Carne", "Lechuga", "Tomate", "Queso"]);
// let hamburguesa2 = crearHamburguesa("Vegetariana", ["Hamburguesa de garbanzos", "Lechuga", "Tomate", "Queso vegano"]);

//   // Función para tomar pedidos
// function tomarPedido(hamburguesa) {
//     console.log("Pedido tomado:");
//     hamburguesa.mostrarDetalles();
// }

//   // Tomar pedidos
// tomarPedido(hamburguesa1);
// tomarPedido(hamburguesa2);