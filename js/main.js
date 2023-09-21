// Definir los productos de catering como un array de objetos
const productosCatering = [
    { nombre: "Sandwich", precio: 5 },
    { nombre: "Pastel", precio: 20 },
    { nombre: "Bebida", precio: 2 }
];

// Función para calcular el presupuesto
function calcularPresupuesto(event) {
    event.preventDefault();

    // Recopilar la información del pedido
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;

    // Guardar los datos en localStorage
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("email", email);
    localStorage.setItem("telefono", telefono);

    // Recopilar la información del pedido
    const cantidadSandwiches = parseInt(document.getElementById("sandwiches").value, 10) || 0;
    const cantidadPasteles = parseInt(document.getElementById("pasteles").value, 10) || 0;
    const cantidadBebidas = parseInt(document.getElementById("bebidas").value, 10) || 0;

    // Realizar el cálculo del presupuesto como antes
    let costoTotal = 0;
    for (const producto of productosCatering) {
        switch (producto.nombre) {
            case "Sandwich":
                costoTotal += producto.precio * cantidadSandwiches;
                break;
            case "Pastel":
                costoTotal += producto.precio * cantidadPasteles;
                break;
            case "Bebida":
                costoTotal += producto.precio * cantidadBebidas;
                break;
        }
    }

    // Mostrar el resultado al cliente con SweetAlert
    Swal.fire({
        title: 'Presupuesto de Catering',
        html: `El presupuesto total es: $${costoTotal.toFixed(2)}`,
        confirmButtonText: 'Aceptar'
    });

    // Enviar los datos al servidor o almacenarlos en una base de datos
    const datosPedido = {
        nombre,
        email,
        telefono,
        presupuesto: costoTotal
    };

    // Enviar datos al servidor (ejemplo ficticio, debes implementar tu propio servidor)
    fetch('/guardar-pedido', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosPedido)
    })
    .then(response => response.json())
    .then(data => {
        // Puedes mostrar un mensaje de éxito o redirigir al cliente a una página de agradecimiento aquí
    });
}

// Función para cargar los datos del cliente desde localStorage
function cargarDatosCliente() {
    const nombreGuardado = localStorage.getItem("nombre");
    const emailGuardado = localStorage.getItem("email");
    const telefonoGuardado = localStorage.getItem("telefono");

    // Verificar si hay datos guardados en localStorage y cargarlos en los campos de entrada
    if (nombreGuardado) {
        document.getElementById("nombre").value = nombreGuardado;
    }
    if (emailGuardado) {
        document.getElementById("email").value = emailGuardado;
    }
    if (telefonoGuardado) {
        document.getElementById("telefono").value = telefonoGuardado;
    }
}

// Llamar a la función para cargar los datos del cliente al cargar la página
cargarDatosCliente();

// Agregar un evento de escucha al formulario
const cateringForm = document.getElementById("catering-form");
cateringForm.addEventListener("submit", calcularPresupuesto);
