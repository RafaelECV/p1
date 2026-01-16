// 1. Declaramos una variable (un contenedor de datos)
const nombre = "Rafael";

// 2. Mandamos un mensaje a la consola (tu mejor amiga en el backend)
console.log("El script se ha cargado correctamente");

// 3. Una función sencilla para saludar
function saludar() {
    const hora = new Date().getHours();
    let mensaje = "";

    if (hora < 12) {
        mensaje = "¡Buenos días!";
    } else if (hora < 18) {
        mensaje = "¡Buenas tardes!";
    } else {
        mensaje = "¡Buenas noches!";
    }

    alert(mensaje + " Bienvenido al portafolio de " + nombre);
}

// 4. Ejecutar el saludo al cargar la página
saludar();