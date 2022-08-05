const botonNumeros = document.getElementsByName('numero');
const botonOperadores = document.getElementsByName('operadores');
const botonIgual = document.getElementById('operador-igual')
const botonDelate = document.getElementById('operador-delate')
pantalla = document.getElementById('pantalla')
let opeActual = ''
let opeAnterior = ''
let operacion = undefined
console.log(botonNumeros)

botonNumeros.forEach(numeros = (boton) => {
    boton.addEventListener('click', num = () => {
        mostrarEnPantalla(boton.innerText);
    })

})

botonOperadores.forEach(numeros = (boton) => {
    boton.addEventListener('click', num = () => {
        seleccionarOperacion(boton.innerText);
    })

})


botonIgual.addEventListener('click', igual = () => {
    calculador();
    actualizarPantalla();
})

botonDelate.addEventListener('click', delate = () => {
    limpiar();
    actualizarPantalla()
})



mostrarEnPantalla = (num) => {
    pantalla.innerHTML += `<div>  
   ${opeActual = opeActual.toString() + num.toString()}
   ${actualizarPantalla()}
   </div`
}

actualizarPantalla = () => {
    pantalla.innerHTML += `<div>  
    ${pantalla.value = opeActual}
    </div`
}

seleccionarOperacion = (op) => {
    if (opeActual === '') return
    if (opeActual !== '') {
        calculador()
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}


limpiar = () => {
    opeActual = '';
    opeAnterior = '';


}
calculador = () => {
    let calculo
    const actual = Number(opeActual);
    const anterior = Number(opeAnterior);
    if (isNaN(actual) || isNaN(anterior)) return
    switch (operacion) {
        case '+':
            calculo = anterior + actual
            break;
        case '-':
            calculo = anterior - actual
            break;
        case '/':
            calculo = anterior / actual
            break;
        case 'x':
            calculo = anterior * actual
            break;
        default:
            return;
    }
    opeActual = calculo
}


