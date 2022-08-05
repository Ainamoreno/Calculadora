const botonNumeros = document.getElementsByName('numero');
const botonOperadores = document.getElementsByName('operadores');
const botonIgual = document.getElementById('operador-igual')
const botonDelate = document.getElementById('operador-delate')
let opeActual = ''
let opeAnterior = ''
console.log(botonNumeros)

botonNumeros.forEach(numeros = (boton) => {
    boton.addEventListener('click', num = () => {
        mostrarEnPantalla(boton.innerText);
    })

})

botonOperadores.forEach(numeros = (boton) => {
    boton.addEventListener('click', num = () => {
        mostrarEnPantalla(boton.innerText);
    })

})


botonIgual.addEventListener('click', igual = () => {
    calculador()
})

botonDelate.addEventListener('click', delate = () => {
    limpiar()
})



mostrarEnPantalla = (num) => {
    pantalla = document.getElementById('pantalla')
    pantalla.innerHTML += `<div>  
   ${opeActual = opeActual.toString() + num.toString()}
   ${pantalla.value = opeActual}
   </div`
}


limpiar = () => {
    opeActual = ''
    opeAnterior = ''
}
calculador = () => {

}
