document.getElementById("enviar").addEventListener("click", function() {
    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const municipio = document.getElementById("municipio").value;
    const estudia = document.getElementById("estudia").value;
    
    // Mostrar los valores en la consola
    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("Edad:", edad);
    console.log("Municipio:", municipio);
    console.log("Estudia:", estudia);
});