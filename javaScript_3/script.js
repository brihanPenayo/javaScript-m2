const mi_input = document.getElementById('input_text')
const mi_boton = document.getElementById('btn_read')
const MI_UL = document.getElementById('lista_de_texto')
const BTN_BORRAR = document.getElementById('btn_borrar')

function leerInput() {
    let textoLeido = mi_input.value;
    console.log(textoLeido)
    if (textoLeido.trim() == '') {
        return
    }
    else {
        MI_UL.innerHTML += `<li>${textoLeido}</li>`
    }
}

function borrarTodo() {
    MI_UL.innerHTML = ''
}

BTN_BORRAR.addEventListener('click', borrarTodo)

mi_boton.addEventListener('click', leerInput)