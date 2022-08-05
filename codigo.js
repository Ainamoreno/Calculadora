const botonNumeros = document.getElementsByName('numero');
const botonOperadores = document.getElementsByName('operadores');
const botonIgual = document.getElementById('operador-igual')
const botonDelate = document.getElementById('operador-delate')
let pantalla = document.getElementById('pantalla-resultado')
let pantallaProceso = document.getElementById('pantalla')
let opeActual = ''
let opeActualProceso = ''
let opeAnterior = ''
let operacion = undefined

botonNumeros.forEach(numeros = (boton) => {
    boton.addEventListener('click', num = () => {
        mostrarEnPantallaResultado(boton.innerText);
        
     

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

mostrarEnPantallaResultado = (num) => {
    pantalla.innerHTML += `<div>  
   ${opeActual = opeActual.toString() + num.toString()}
   ${actualizarPantalla()}
   </div`
}
/*mostrarEnPantallaProceso = (num1) => {
    pantallaProceso.innerHTML += `<div>  
    ${opeActualProceso = opeActualProceso.toString() + num1.toString()}
    </div`
}*/

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


