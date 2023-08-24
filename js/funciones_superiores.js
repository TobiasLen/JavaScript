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
