// Función que simula una llamada a una API
function obtenerDatos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos obtenidos de la API");
        }, 2000); // simula 2 segundos de espera
    });
}

// Función asíncrona que usa await para esperar el resultado
async function ejecutar() {
    console.log("Solicitando datos...");
    const resultado = await obtenerDatos();
    console.log(resultado); // "Datos obtenidos de la API"
}

// Ejecutar la función
ejecutar();