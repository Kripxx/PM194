/*Crear un arrow function llamada saludoPersonalizado que reciba 
dos parametros: nombre y edad, y retorne una cadena como la siguiente:

"Hola, mi nombre es Isay y tengo 37 años". */

//Ejercicio C con opcion para que ingrese nombre y edad desde terminal
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


//Funcion de flecha
const saludoPersonalizado = (nombre, edad) => `Hola, mi nombre es ${nombre} y tengo ${edad} años`;
//Ejecuta la funcion
readline.question('Ingresa tu nombre: ', (nombre) => {
    readline.question('Ingresa tu edad: ', (edad) => {
        console.log(saludoPersonalizado(nombre, edad));
        readline.close();
    });
});

