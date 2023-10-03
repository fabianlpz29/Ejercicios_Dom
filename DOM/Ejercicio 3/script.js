function mostrarSelecciones() {
    const departamentoSelect = document.getElementById("departamento");
    const generoSelect = document.getElementById("genero");
    const educacionSelect = document.getElementById("educacion");

    const departamentoSeleccionado = departamentoSelect.options[departamentoSelect.selectedIndex].text;
    const generoSeleccionado = generoSelect.options[generoSelect.selectedIndex].text;
    const educacionSeleccionada = educacionSelect.options[educacionSelect.selectedIndex].text;

    console.log("Departamento seleccionado: " + departamentoSeleccionado);
    console.log("Genero seleccionado: " + generoSeleccionado);
    console.log("Educación seleccionada: " + educacionSeleccionada);
}