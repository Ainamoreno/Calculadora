const botonNumeros = document.getElementsByName('numero');
const botonOperadores = document.getElementsByName('operadores');
const botonIgual = document.getElementById('operador-igual');
const botonDelate = document.getElementById('operador-delate');
let pantalla = document.getElementById('pantalla-resultado');
let pantallaProceso = document.getElementById('pantalla');
let numActual = '';
let numAnterior = '';
let resultado = '';
let operacion = '';

botonNumeros.forEach(boton => {
    boton.addEventListener('click', num = () => {
        numActual = numActual.toString() + boton.innerText.toString();
        actualizarPantalla();
    })
})

botonOperadores.forEach(boton => {
    boton.addEventListener('click', num = () => {
        seleccionarOperacion(boton.innerText);
    })
})

botonIgual.addEventListener('click', () => {
    calculador();
    actualizarPantalla();
})

botonDelate.addEventListener('click', () => {
    limpiar();
    actualizarPantalla();
})

actualizarPantalla = () => {
    pantalla.value = resultado ? resultado : numActual;

    if (resultado) {
        pantallaProceso.value = `${numAnterior} ${operacion} ${numActual} = ${resultado}`;
    }
    
    console.log('numActual', numActual);
    console.log('numAnterior', numAnterior);
    console.log('resultado', resultado);
   //pantallaProceso.innerHTML += `${opeActualProceso = opeActualProceso.toString() + num1.toString()}`;
}

seleccionarOperacion = (op) => {
    if (numActual === '') return
    if (numActual !== '') {
        calculador()
    }
    operacion = op.toString();
    numAnterior = numActual;
    numActual = '';
}



limpiar = () => {
    numActual = '';
    numAnterior = '';
    resultado = '';
    pantalla.value = '';
    pantallaProceso.value = '';
}

calculador = () => {
    const actual = Number(numActual);
    const anterior = Number(numAnterior);
    if (isNaN(actual) || isNaN(anterior)) return
    switch (operacion) {
        case '+':
            resultado = anterior + actual
            break;
        case '-':
            resultado = anterior - actual
            break;
        case '/':
            resultado = anterior / actual
            break;
        case 'x':
            resultado = anterior * actual
            break;
        default:
            return;
    }
}

/*mostrarEnPantallaProceso = (num1) => {
    pantallaProceso.innerHTML += `<div>  
    ${opeActualProceso = opeActualProceso.toString() + num1.toString()}
    </div`
}*/

