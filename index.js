const displayvalant = document.getElementById('value_ant');
const displayvalact = document.getElementById('value_act');
const botonesnum = document.querySelectorAll('.numero');
const botonesoperator = document.querySelectorAll('.operador');

const display = new Display(displayvalant,displayvalact);

botonesnum.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesoperator.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));
});