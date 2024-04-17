// Manipulación del DOM -> Document Object Model
let mi_boton = document.getElementById('miBoton')
let mi_titulo = document.getElementById('miTitulo')
let mi_input = document.getElementById('mi_input')

mi_boton.addEventListener("click", () => {
    if (mi_input.value.trim() == '') {
        alert("Está vacío")
    } else {
        mi_titulo.innerText = mi_input.value
    }
})