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
    let cm = Number(prompt("Cuantas metas tienes hoy?"));
    let listademetas=[];
    for (let i=0; i<cm; i++)
        {
            let meta = prompt("Escribe tu meta número " + (i + 1) + ":");
            listademetas.push(meta);
        }
    let naciemiento = Number(prompt("En que año naciste?"));

    alert(mensaje + " Bienvenido al portafolio de " + nombre);
    alert("Hola "+nombre+" y naciste en el año "+naciemiento);
    alert("Tus metas para hoy son:\n" + listademetas.join("\n"));
}

// 4. Ejecutar el saludo al cargar la página
saludar();