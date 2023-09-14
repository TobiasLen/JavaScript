/* // Definir un array de hamburguesas
const hamburguesas = [
    { nombre: "Clásica", precio: 5.99 },
    { nombre: "Doble Carne", precio: 7.99 },
    { nombre: "Vegana", precio: 6.99 },
    // Agrega más hamburguesas si es necesario
];

// Obtener el carrito de compras
const carritoLista = document.getElementById("carrito");

// Obtener el formulario
const menuForm = document.getElementById("menuForm");

// Obtener el campo de cantidad
const cantidadInput = document.getElementById("cantidad");

// Manejar el envío del formulario
menuForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

    const hamburguesaSeleccionada = document.querySelector('input[name="hamburguesa"]:checked');
    
    if (hamburguesaSeleccionada) {
        const hamburguesaNombre = hamburguesaSeleccionada.value;
        const hamburguesaElegida = hamburguesas.find((h) => h.nombre === hamburguesaNombre);
        
        if (hamburguesaElegida) {
            const cantidad = parseInt(cantidadInput.value);
            agregarAlCarrito(hamburguesaElegida, cantidad);
        }
    }
});

// Vaciar el carrito de compras
const vaciarCarritoButton = document.getElementById("vaciarCarrito");
vaciarCarritoButton.addEventListener("click", () => vaciarCarrito());

// Función para agregar una hamburguesa al carrito
function agregarAlCarrito(hamburguesa, cantidad) {
    const item = document.createElement("li");
    const precioTotal = hamburguesa.precio * cantidad;
    item.innerHTML = `${hamburguesa.nombre} x ${cantidad} - $${precioTotal.toFixed(2)}`;
    const boton = document.createElement("button");
    boton.innerText = "Eliminar del Carrito";
    boton.addEventListener("click", () => eliminarDelCarrito(item, precioTotal));
    item.appendChild(boton);
    carritoLista.appendChild(item);

    // Actualizar el total
    actualizarTotalCarrito();
}

// Función para eliminar una hamburguesa del carrito
function eliminarDelCarrito(item, precioTotal) {
    carritoLista.removeChild(item);
    // Restar el precio total del elemento eliminado
    restarTotalCarrito(precioTotal);
}

// Función para vaciar el carrito
function vaciarCarrito() {
    while (carritoLista.firstChild) {
        carritoLista.removeChild(carritoLista.firstChild);
    }
    // Reiniciar el total del carrito
    reiniciarTotalCarrito();
}

// Función para actualizar el total en el carrito
function actualizarTotalCarrito() {
    const itemsCarrito = carritoLista.getElementsByTagName("li");
    let total = 0;
    for (let i = 0; i < itemsCarrito.length; i++) {
        const precioTexto = itemsCarrito[i].innerText.split(" - ")[1];
        const precio = parseFloat(precioTexto.replace("$", ""));
        total += precio;
    }
    document.getElementById("totalCarrito").textContent = total.toFixed(2);
}

// Función para restar el precio del carrito
function restarTotalCarrito(precio) {
    const totalCarrito = parseFloat(document.getElementById("totalCarrito").textContent);
    const nuevoTotal = totalCarrito - precio;
    document.getElementById("totalCarrito").textContent = nuevoTotal.toFixed(2);
}

// Función para reiniciar el total del carrito
function reiniciarTotalCarrito() {
    document.getElementById("totalCarrito").textContent = "0.00";
}
 */