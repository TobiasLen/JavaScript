// // login.js

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
