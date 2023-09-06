// No lo utilizo de momento

// carrito.js

// let carrito = [];
// let total = 0;

// function agregarAlCarrito(producto, precio) {
//     carrito.push({ producto, precio });
//     total += precio;
//     actualizarCarrito();
// }

// function actualizarCarrito() {
//     let itemsElement = document.getElementById("items");
//     let totalElement = document.getElementById("total");

//     itemsElement.innerHTML = "";
//     carrito.forEach(item => {
//         let li = document.createElement("li");
//         li.textContent = `${item.producto}: $${item.precio}`;
//         itemsElement.appendChild(li);
//     });

//     totalElement.textContent = total.toFixed(2);
// }

// function realizarCompra() {
//     if (carrito.length === 0) {
//         alert("El carrito está vacío. Agregue productos antes de realizar la compra.");
//         return;
//     }

//     alert(`Compra realizada. Total: $${total.toFixed(2)}`);
//     carrito = [];
//     total = 0;
//     actualizarCarrito();
// }

