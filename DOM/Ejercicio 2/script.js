// Obtener una lista de todos los controles de formulario
const formControls = document.querySelectorAll(".form-control");

// Agregar eventos de entrada para cada control de formulario
formControls.forEach(control => {
    control.addEventListener("input", function() {
        if (this.value.trim() === "") {
            this.classList.remove("filled");
        } else {
            this.classList.add("filled");
        }
    });
});