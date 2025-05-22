// Función que verifica si el usuario es "admin"
function verificarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        if (usuario === "admin") {
            resolve("Acceso concedido");
        } else {
            reject("Acceso denegado");
        }
    });
}

// Pruebas de la función
verificarUsuario("admin")
    .then(mensaje => console.log(mensaje))     // Acceso concedido
    .catch(error => console.log(error));

verificarUsuario("juan")
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));       // Acceso denegado