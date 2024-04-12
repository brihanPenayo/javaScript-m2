let MiTitulo = document.getElementById('titulo-h1')
// MiTitulo.innerText = 'Hola Mundo desde JavaScript'

let miBoton = document.getElementById('btn-titulo')

miBoton.addEventListener('click', () => {
    if (MiTitulo.innerText == 'Repaso de JavaScript') {
        MiTitulo.innerText = 'Cambio de titulo a traves del boton'
    } else {
        MiTitulo.innerText = 'Repaso de JavaScript'
    }
})

let widthX = 100
miBoton.addEventListener('wheel', () => {
    miBoton.style.width = `${widthX}px`
    widthX++
})